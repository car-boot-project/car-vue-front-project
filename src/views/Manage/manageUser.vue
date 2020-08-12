<template>
<div class="manageuser">
  <!-- <div id="round" style="float:left">
  <el-menu>
    <el-menu-item>
      <el-link @click="tomanageList">
        <i class="el-icon-back"></i>返回管理中心
        </el-link>
        </el-menu-item>
  </el-menu>
</div> -->
<h1>
  用户管理<i class="fa fa-gear" aria-hidden="true"></i>
</h1>
<!-- 返回管理中心 -->
  <el-divider></el-divider>
  <el-page-header @back="goBack" content></el-page-header>

  <el-table
    :data="tableData"
    :header-cell-style="tableHeaderColor" 
    :cell-style="tableCellStyle"
    style="width: 100%"
    max-height="500">
    
    <el-table-column prop="userName" label="用户名" width="200">
      <template slot-scope="scope">
            <i class="el-icon-user-solid"></i>
            {{scope.row.username}}
      </template>
    </el-table-column>

    <el-table-column prop="userPassword" label="密码" width="200">
      <template slot-scope="scope">
            <i class="el-icon-unlock"></i>
            {{scope.row.userpassword}}
      </template>
    </el-table-column>

    <el-table-column prop="userPhone" label="联系方式" width="260">
      <template slot-scope="scope">
            <i class="el-icon-phone-outline"></i>
            {{scope.row.userphone}}
      </template>
    </el-table-column>
                    
    <el-table-column prop="userAddress" label="地址" width="300">
      <template slot-scope="scope">
            <i class="el-icon-location-information"></i>
            {{scope.row.useraddress}}
      </template>
    </el-table-column>

<!--- 封禁解禁用户
<el-table-column fixed="right" label="用户状态" width="210">
      <template slot-scope="scope">
    <el-button size="small" @click.native.prevent="deleteRow(scope.$index, tableData)" type="info" round plain icon="el-icon-remove">封禁</el-button>
  <el-button size="small" @click.native.prevent="deleteRow(scope.$index, tableData)" type="success" plain icon="el-icon-success" round>解禁</el-button>
      </template>
    </el-table-column>
--->
    <el-table-column fixed="right" label="操作" width="180">
      <template slot-scope="scope">
    <el-button @click.native.prevent="deleteRow(scope.$index, scope.row,tableData)"
    type="danger" plain icon="el-icon-delete">删除</el-button>
      </template>
    </el-table-column>

     <el-table-column label="用户状态" prop="blacklist">
       <template slot-scope="scope" >
           <el-switch  v-model="scope.row.deltag"  :active-value="0" :inactive-value="1" @change="userStateChange(scope.row.userid,scope.row.deltag)">
           </el-switch> 封禁
       </template>
    </el-table-column>
<!-- <el-table-column label="用户状态" >
           <el-switch  
           v-model="value2" 
           active-text="封禁" 
           inactive-text="正常" >
           </el-switch> 
       
    </el-table-column> -->

  </el-table>
   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.page"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="this.offset"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total">
    </el-pagination>
  </div>
</div>
</template>


<script>
  export default {
    name: "manageuser",
    mounted(){
      const _this = this;
       this.$axios
            .get("admin/get_all_user_by_page?page="+this.page+"&offset="+this.offset)
            .then(res => {
              this.tableData = res.data.list;
              this.total = res.data.total;
                // console.log(res.data);
            })
            //  console.log("测试："+JSON.parse(sessionStorage.getItem("admin")).username);
    },
    methods: {

      //返回管理中心
      //   tomanageList() {
      //   this.$router.push('/managelist');
      // },
      goBack() {
      this.$router.go(-1);
    },

      getData(page,offset){
       this.$axios
            .get("admin/get_all_user_by_page?page="+this.page+"&offset="+this.offset)
            .then(res => {
              // console.log(res.data);
              this.tableData = res.data.list;
              this.total = res.data.total;
             
            })
      },
      deleteRow(index, row,rows) {
        rows.splice(index, 1);
         this.$axios
            .post("admin/delete?userid="+row.userid)
            .then(res => {
              if(res.data.status === 0){
               this.$message({
                    message: "删除成功！",
                    type: "success"
                  });
              }
            })
        // console.log(row.userid)
      },
       
       //修改表格表头背景色
       tableHeaderColor({row, column, rowIndex, columnIndex}){
         if(rowIndex === 0){
           return 'background-color: lightblue;color: #fff;font-weight: 500;'
         }
       },
       // 修改表格行的背景色
       tableCellStyle({row,column,rowIndex,columnIndex}){
         if(columnIndex === 0,1,2,3){
           return 'background-color: #ecfcf0'
           return 'cell-grey'
         }
       },
        handleSizeChange(val) {
        this.offset = val;
        this.getData(this.page,this.offset);
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getData(this.page,this.offset)
      },
      userStateChange(userid,deltag){
        if(deltag === 0){
          this.$axios
            .post("admin/lock?userid="+userid)
            .then(res => {
            //  console.log(res.data);
            })
        }
        else {
           this.$axios
            .post("admin/unlock?userid="+userid)
            .then(res => {
            //  console.log(res.data);
            })
        }
       
      }
    },
    data() {
      return {
        //value2:true,
        tableData: [],
        page:1,
        offset:5,
        total:10
      }
    }
  }
</script>

<style scoped>

.el-table-column{
  margin-bottom: 20px;
}
</style>
