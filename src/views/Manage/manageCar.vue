<template>
<div class="managecar">
<div id="round" style="float:left">
  <el-menu>
    <el-menu-item  @click="tomanageList">
      <el-link>
        <i class="el-icon-back"></i>返回管理中心
        </el-link>
        </el-menu-item>
  </el-menu>
</div>
<h1>
  汽车管理<i class="fa fa-car" aria-hidden="true"></i>
</h1>

<el-menu>
<el-menu-item>
  <el-col :span="4">
    <el-button type="primary" @click="showAdddaillog">添加汽车</el-button>
  </el-col>
</el-menu-item>
</el-menu>
  <el-table
    :data="tableData"
    :header-cell-style="tableHeaderColor" 
    :cell-style="tableCellStyle"
    style="width: 100%"
    max-height="500"
    >
    <!-- header-cell-style="{background:'#FAFA03'}" -->
    <!-- 汽车基本信息 -->
    <el-table-column prop='carId' label='汽车编号' width="100">
      <template slot-scope="scope">
        {{scope.row.carId}}
      </template>
    </el-table-column>

    <el-table-column prop="carName" label="汽车名称" width="160">
      <template slot-scope="scope">
            {{scope.row.carName}}
      </template>
    </el-table-column>

    <el-table-column prop="carBrand" label="汽车品牌" width="160">
      <template slot-scope="scope">
            {{scope.row.carBrand}}
      </template>
    </el-table-column>
    
    <el-table-column prop="carModel" label="汽车型号" width="160">
      <template slot-scope="scope">
            {{scope.row.carModel}}
      </template>
    </el-table-column>

    <el-table-column prop="carPrice" label="汽车价格" width="170">
      <template slot-scope="scope">
            {{scope.row.carPrice}}
      </template>
    </el-table-column>

    <el-table-column prop='carStock' label='汽车库存' width="160">
      <template slot-scope="scope">
        {{scope.row.carStock}}
      </template>
    </el-table-column>

    <el-table-column prop="carNote" label="汽车简介" width="280">
      <template slot-scope="scope">
            {{scope.row.carNote}}
      </template>
    </el-table-column>

<!-- 库存增减 -->
     <!-- <el-table-column align="center" label=" " width="60">
      <template slot-scope="scope">
            <span style="color:#35EB15;font-size:16px" @click.prevent="addRow(scope.row,scope.$index)"><i class="el-icon-circle-plus"></i></span>
      </template>
    </el-table-column>

     <el-table-column prop="stock" label="库存" align="center" width="110">
         <template slot-scope="scope">
              <el-input v-model="scope.row.number" oninput="value=value.replace(/[^\d]/g,'')" maxlength="3">
                   {{scope.row.stock}}
              </el-input>
         </template>
      </el-table-column>

      <el-table-column align="center" label=" " width="60">
               <template slot-scope="scope">
                    <span style="color:#FFB7E9;font-size:16px" @click.prevent="delRow(scope.row,scope.$index)"><i class="el-icon-remove"></i></span>
               </template>
      </el-table-column> -->

      <!-- ///////////////////////////// -->
      <!-- <el-table-column label="库存" align="center" width="200">
                <template>
                  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="库存"></el-input-number>
                </template>
    </el-table-column>   -->

<!-- <el-table-column label="库存" width="280" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input-number
            v-model="scope.row.quantity"
            @change="handleChange($event,scope.row.carName)"
            :min="1"
            :max="10"
            label="库存"
          ></el-input-number>
        </template>
      </el-table-column> -->

  <el-table-column fixed="right" label="编辑" width="180" align="center">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" circle  size="mini" @click="ShowEditCar(scope.row.carId)"></el-button>
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" icon="el-icon-delete" plain size="mini">删除</el-button>
      </template>
    </el-table-column>

  </el-table>

  <!-- 编辑汽车信息 -->
  <el-dialog title="编辑汽车信息" :visible.sync="editdailgVisible" width="50%" @click="editdaillogClose">
            <el-form ref="editFormRef" :model="car"  label-width="80px">
                <el-form-item label="汽车编号" prop="carId">
                    <el-input v-model="car.carId"></el-input>
                </el-form-item>
                <el-form-item label="汽车名称" prop="carName">
                    <el-input v-model="car.carName"></el-input>
                </el-form-item>
                <el-form-item label="汽车品牌" prop="carBrand">
                    <el-input v-model="car.carBrand"></el-input>
                </el-form-item>
                <el-form-item label="汽车型号" prop="carModel">
                    <el-input v-model="car.carModel"></el-input>
                </el-form-item>
                <el-form-item label="图片链接" prop="carImg">
                    <el-input v-model="car.carImg"></el-input>
                </el-form-item>
                <el-form-item label="汽车价格" prop="carPrice">
                    <el-input v-model="car.carPrice"></el-input>
                </el-form-item>
                <el-form-item label="库存" prop="carStock">
                    <el-input v-model="car.carStock"></el-input>
                </el-form-item>
                <el-form-item label="汽车简介" prop="carNote">
                    <el-input v-model="car.carName"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="editdailgVisible = false">取 消</el-button>
    <el-button type="primary" @click="editcar">保 存</el-button>
  </span>
        </el-dialog>

  <!-- 添加汽车 -->
  <el-dialog title="添加汽车"  :visible.sync="adddialogVisible" width="50%" @click="adddialogClose">
            <el-form ref="addFormRef" :model="car"  label-width="80px">
                <el-form-item label="汽车名" prop="carName">
                    <el-input v-model="car.carName"></el-input>
                </el-form-item>
                <el-form-item label="品牌" prop="carBrand">
                    <el-input v-model="car.carBrand"></el-input>
                </el-form-item>
                <el-form-item label="库存" prop="carStock ">
                    <el-input v-model="car.carStock"></el-input>
                </el-form-item>
                <el-form-item label="图片链接" prop="carImg">
                    <el-input v-model="car.carImg"></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="carPrice">
                    <el-input v-model="car.carPrice"></el-input>
                </el-form-item>
                <el-form-item label="型号" prop="carModel">
                    <el-input v-model="car.carModel"></el-input>
                </el-form-item>
                <el-form-item label="简介" prop="carNote">
                    <el-input v-model="car.carNote"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="adddialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addcar">添 加</el-button>
  </span>
        </el-dialog>


</div>
</template>


<script>
  export default {
  name: "managecar",
    created(){
        },
        
    methods: {
      //返回管理中心
        tomanageList() {
        this.$router.push('/managelist');
      },
      //删除行操作
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      showAdddaillog(){
        this.adddialogVisible =true
      },
      adddialogClose(){
        this.$refs.addFormRef.resetFields()
      },
      ShowEditCar(){
        this.editdailgVisible =true
      },

//修改表格表头背景色
       tableHeaderColor({row, column, rowIndex, columnIndex}){
         if(rowIndex === 0){
           return 'background-color: #a1afc9;color: #fff;font-weight: 500;'
         }
       },
       // 修改表格行的背景色
       tableCellStyle({row,column,rowIndex,columnIndex}){
         if(columnIndex === 0,1,2,3){
           return 'background-color: #f3f9f1'
           return 'cell-grey'
         }
       },

      addcar(){

      },
      editcar(){

      },
      adddialogClose(){
        this.$refs.addFormRef.resetFields();
      },
      editdaillogClose(){
        this.$refs.editFormRef.resetFields();
      },
//库存数量增减
      // addRow(row){
      //       //   console.log(row)
      //           row.number = row.number+1
      // },
      // delRow(row){
      //       //   console.log(row)
      //           if (row.number != 0) {
      //               row.number = row.number - 1
      //           }
      // }

    },
    
      
    //库存修改
    // handleChange(quantity, carName) {
    //   //   console.log(quantity);
    //   //   console.log(cartId);
    //   this.$axios
    //     .post("cart/updatequantity", { carName, quantity })
    //     .then(res => {
    //       if (res.data > 0) {
    //         this.$message.success("操作成功");
    //       } else {
    //         this.$message.success("操作失败");
    //       }
    //     })
    //     .catch(e => {
    //       this.$message.error("服务器内部发生异常");
    //       console.log(e);
    //     });
    // },

    data() {
      return {
        car:{
          carNum: 1,
          carName: '',
          carBrand: '',
          carStock: '',
          carImg: '',
          carPrice:'',
          carModel:'',
          carNote: '',
          kindNum: 2
        },
        adddialogVisible:false,
        editdailgVisible:false,
        tableData: [{
          carId: '10090212',
          carName: '玛莎拉蒂 MC12',
          carBrand: '玛莎拉蒂',
          carStock:'10',
          carModel: '运动型跑车',
          carPrice: '5000000.00',
          carNote: '这款基于GranTurismo跑车平台基础上开发的四座敞篷跑',
        },
        {
          carId: '19873366',
          carName: '奥迪A7新能源',
          carBrand: '奥迪',
          carStock:'9',
          carModel: '奥迪 A7',
          carPrice: '738000.00',
          carNote: '外观方面，新车依然采用了四门轿跑的车身造型,内饰方面，新车配',
        },
        {
          carId: '20200789',
          carName: '奔驰 gl450',
          carBrand: '奔驰',
          carStock:'11',
          carModel: '奔驰 gl',
          carPrice: '500000.00',
          carNote: '英雄志向，博闻多识。长轴距GLC SUV搭配MBUX智能人机',
        },
        {
          carId: '20200809',
          carName: '别克微蓝',
          carBrand: '别克',
          carStock:'30',
          carModel: '纯电动汽车',
          carPrice: '$1233',
          carNote: '微蓝7基于通用汽车新能源车型平台正向研发，搭载eMotion',
        },
        {
          carId: '28938483',
          carName: '丰田 RAV4荣放',
          carBrand: '丰田',
          carStock:'0',
          carModel: 'RAV4',
          carPrice: '218700.00',
          carNote: 'Rav4一直都是美国紧凑型SUV的销量担当，和CR-V、日产',
                  }]
      };
    },
    

  }
</script>

<style>

.el-table-column{
  margin-bottom: 20px;

}
/* el-menu {
    border-right: solid 2px #0c0c0c;
    padding-left: 0;
    background-color: rgb(240, 30, 30);
} */


</style>
