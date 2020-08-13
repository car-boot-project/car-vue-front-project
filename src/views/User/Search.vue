<template>
  <div class="search" style="margin-top: 50px;">
 <div style="width=600px;height: 50px;margin-top: 8px;">
   <h3 style="text-align: center;">
      <i class="fa fa-search" aria-hidden="true">
        </i>商品搜索结果
    </h3>
    <el-divider></el-divider>
</div>

<div style="margin-top:120px;width:100%;">
   <el-table :data="tableData" style="width: 100% text-align: center" :row-class-name="tableRowClassName">
       <el-table-column prop label="图片" >
        <template slot-scope="s">
          <img :src="s.row.carimg" width="230px" height="180px" alt />
        </template>
      </el-table-column>
      <el-table-column prop="carname" label="名称"></el-table-column>
      <el-table-column prop="carbrand" label="品牌"></el-table-column>

     
      <el-table-column prop="carPrice" label="价格"></el-table-column>
      <el-table-column prop="carnote" label="简介"></el-table-column>   
      <el-table-column fixed="right" label="操作" width="240">
        <div slot-scope="s">
          <i class="fa fa-hand-o-right fa-4x"  aria-hidden="true" @click="routeDemo(s.row)" style="margin-left:70px"></i> 
          <!-- <el-button type="primary" size="small" @click="routeDemo(s.row)">查看</el-button> -->
        </div>
      </el-table-column>
    </el-table>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Search',
  components: {
   
  },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      
      //表格样式
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },

    data() {
      return {
        tableData: [{
          carimg:require("../../assets/timg01.jpg"),
          carname: '王小虎',
          carbrand: '上海',
          carPrice: '普陀区',
          carnote: '上海市普陀区金沙江路 1518 弄',
        },
        {
          carimg:require("../../assets/timg01.jpg"),
          carname: '王小虎',
          carbrand: '上海',
          carPrice: '普陀区',
          carnote: '上海市普陀区金沙江路 1518 弄',
        }
        ]
      }
    }
  }
</script>
<style>
  .el-table .warning-row {
    background: oldlace;
    
  }

  .el-table .success-row {
    background: #f0f9eb;

  }
</style>