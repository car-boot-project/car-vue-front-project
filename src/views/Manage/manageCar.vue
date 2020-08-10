<template>
<div class="managecar">
<h2>
  汽车管理<i class="fa fa-car" aria-hidden="true"></i>
</h2>
<el-menu>
<el-menu-item>
  <router-link to="/managelist">返回管理中心</router-link>
</el-menu-item>
</el-menu>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="500"
    >
    <!-- header-cell-style="{background:'#FAFA03'}" -->
    <!-- 汽车基本信息 -->
    <el-table-column prop="carName" label="汽车名称" width="160">
      <template slot-scope="scope">
            <i class="el-icon-postcard"></i>
            {{scope.row.carName}}
      </template>
    </el-table-column>

    <el-table-column prop="carBrand" label="汽车品牌" width="160">
      <template slot-scope="scope">
            <i class="el-icon-medal"></i>
            {{scope.row.carBrand}}
      </template>
    </el-table-column>
    
    <el-table-column prop="carModel" label="汽车型号" width="160">
      <template slot-scope="scope">
            <i class="el-icon-notebook-2"></i>
            {{scope.row.carModel}}
      </template>
    </el-table-column>

    <el-table-column prop="carPrice" label="汽车价格" width="170">
      <template slot-scope="scope">
            <i class="el-icon-shopping-cart-2"></i>
            {{scope.row.carPrice}}
      </template>
    </el-table-column>
                    
    <el-table-column prop="carNote" label="汽车简介" width="280">
      <template slot-scope="scope">
            <i class="el-icon-chat-line-square"></i>
            {{scope.row.carNote}}
      </template>
    </el-table-column>
<!-- 库存增减 -->
     <el-table-column align="center" label=" " width="60">
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
      </el-table-column>

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

<el-table-column fixed="right" label="操作" width="180">
      <template slot-scope="scope">
    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
    type="danger" plain icon="el-icon-delete">删除</el-button>
      </template>
    </el-table-column>

  </el-table>


</div>
</template>

<script>
  export default {
    name: 'managecar',
    created(){
        },
        
    methods: {
      //删除行操作
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
//库存数量增减
      addRow(row){
            //   console.log(row)
                row.number = row.number+1
            },
            delRow(row){
            //   console.log(row)
                if (row.number != 0) {
                    row.number = row.number - 1
                }
            }
  
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
        tableData: [{
          carName: '玛莎拉蒂',
          carBrand: '玛莎拉蒂',
          carModel: '超跑',
          carPrice: '$1233',
          carNote: '好看！',
          stock: '4'
        },
        {
          carName: '玛莎拉蒂',
          carBrand: '玛莎拉蒂',
          carModel: '超跑',
          carPrice: '$1233',
          carNote: '好看！',
          stock: '5'
        },
        {
          carName: '玛莎拉蒂',
          carBrand: '玛莎拉蒂',
          carModel: '超跑',
          carPrice: '$1233',
          carNote: '好看！',
          stock:'7'
        },
        {
          carName: '玛莎拉蒂',
          carBrand: '玛莎拉蒂',
          carModel: '超跑',
          carPrice: '$1233',
          carNote: '好看！',
          stock: '5'
        },
        {
          carName: '玛莎拉蒂',
          carBrand: '玛莎拉蒂',
          carModel: '超跑',
          carPrice: '$1233',
          carNote: '好看！',
          stock: '8'
        }]
      };
    },
    //  created(){
    //      },
        
    // methods: {
    //     handleChange(value) {
    //       console.log(value);
    //     }
      
    //  },
  }
</script>

<style scoped>

.el-table-column{
  margin-bottom: 20px;

}
.el-menu{
    border-bottom: 60px;
}
</style>
