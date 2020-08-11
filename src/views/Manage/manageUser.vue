<template>
<div class="manageuser">
  <div id="round" style="float:left">
  <el-menu>
    <el-menu-item>
      <el-link @click="tomanageList">
        <i class="el-icon-back"></i>返回管理中心
        </el-link>
        </el-menu-item>
  </el-menu>
</div>
<h1>
  用户管理<i class="fa fa-gear" aria-hidden="true"></i>
</h1>

  <el-table
    :data="tableData"
    :header-cell-style="tableHeaderColor" 
    :cell-style="tableCellStyle"
    style="width: 100%"
    max-height="500">
    
    <el-table-column prop="userName" label="用户名" width="200">
      <template slot-scope="scope">
            <i class="el-icon-user-solid"></i>
            {{scope.row.userName}}
      </template>
    </el-table-column>

    <el-table-column prop="userPassword" label="密码" width="200">
      <template slot-scope="scope">
            <i class="el-icon-unlock"></i>
            {{scope.row.userPassword}}
      </template>
    </el-table-column>

    <el-table-column prop="userPhone" label="联系方式" width="260">
      <template slot-scope="scope">
            <i class="el-icon-phone-outline"></i>
            {{scope.row.userPhone}}
      </template>
    </el-table-column>
                    
    <el-table-column prop="userAddress" label="地址" width="300">
      <template slot-scope="scope">
            <i class="el-icon-location-information"></i>
            {{scope.row.userAddress}}
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
    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
    type="danger" plain icon="el-icon-delete">删除</el-button>
      </template>
    </el-table-column>

     <el-table-column label="用户状态" prop="blacklist">
       <template slot-scope="scope" >
           <el-switch  v-model="scope.row.blacklist"  :active-value="1" :inactive-value="0" @change="userStateChange(scope.row)">
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
</div>
</template>

<script>
export default {
  name: "manageuser"
};
</script>

<script>
  export default {

    methods: {

      //返回管理中心
        tomanageList() {
        this.$router.push('/managelist');
      },

      deleteRow(index, rows) {
        rows.splice(index, 1);
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
    },
    data() {
      return {
        //value2:true,
        tableData: [{
          userName: '岳小莎',
          userPassword: '123456',
          userAddress: '上海市普陀区金沙江路 1518 弄',
          userPhone: '13386861111'
          
        }, {
          userName: '王小飞',
          userPassword: '123456',
          userAddress: '宜昌市西陵区大学路八号',
          userPhone: '13386862222'
        }, {
          userName: '张小薇',
          userPassword: '123456',
          userAddress: '北京市朝阳区三里屯路19号',
          userPhone: '13386863333'
        }, {
          userName: '宋小卓',
          userPassword: '123456',
          userAddress: '天津市南开区复康路55号',
          userPhone: '13386864444'
        }, {
          userName: '张小朋',
          userPassword: '123456',
          userAddress: '青岛市城阳区正阳路30号',
          userPhone: '13386865555'
        }, 
        {
          userName: '仙女刘',
          userPassword: '123456',
          userAddress: '杭州市余杭区人民大道1556号',
          userPhone: '13386866666'
        },
        {
          userName: '岳小莎',
          userPassword: '123456',
          userAddress: '上海市普陀区金沙江路 1518 弄',
          userPhone: '13386861111'
          },
          {
          userName: '宋小卓',
          userPassword: '123456',
          userAddress: '天津市南开区复康路55号',
          userPhone: '13386864444'
        }, 
        {
          userName: '张小朋',
          userPassword: '123456',
          userAddress: '青岛市城阳区正阳路30号',
          userPhone: '13386865555'
        }, 
        {
          userName: '仙女刘',
          userPassword: '123456',
          userAddress: '杭州市余杭区人民大道1556号',
          userPhone: '13386866666'
        }]
      }
    }
  }
</script>

<style scoped>

.el-table-column{
  margin-bottom: 20px;
}
</style>
