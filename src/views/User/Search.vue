<template>
  <div class="search" style="margin-top: 50px;">
    <div style="width=600px;height: 50px;margin-top: 10px;">
      <h3 style="text-align: center;">
        <i class="fa fa-search" aria-hidden="true"> </i>商品搜索结果页
      </h3>
      <el-divider></el-divider>
    </div>

    <div style="margin-top:120px;width:100%;">
      <div style="float:right;margin-top:10px">
       <el-link type="warning" @click="toHome">返回主页</el-link>
      </div>
      <el-table
        :data="tableData"
        style="width: 100% text-align: center"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop label="图片">
          <template slot-scope="s">
            <img :src="s.row.carimg" width="230px" height="180px" alt />
          </template>
        </el-table-column>
        <el-table-column prop="carname" label="名称"></el-table-column>
        <el-table-column prop="carbrand" label="品牌"></el-table-column>

        <el-table-column prop="carprice" label="价格"></el-table-column>
        <el-table-column prop="carnote" label="简介"></el-table-column>
        <el-table-column fixed="right" label="操作" width="240">
          <div slot-scope="s">
            <i
              class="fa fa-hand-o-right fa-4x"
              aria-hidden="true"
              @click="toDetail(s.row.carid)"
              style="margin-left:70px"
            ></i>
            <!-- <el-button type="primary" size="small" @click="routeDemo(s.row)">查看</el-button> -->
          </div>
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  created() {
    this.carname = this.$route.query.carname;
    // console.log("carname="+this.carname);
    this.$axios
            .post("car/search?carname="+this.carname)
            .then(res => {
              // console.log(res.data);
              this.tableData = res.data;
              })
  },
  components: {},
  methods: {
      toDetail(row) {
      if (this.$getSessionStorage("user") === null) {
        this.$message({
          message: "请先登录！",
          type: "warning",
        });
        return;
      } else {
		   this.$setSessionStorage("carid", row);
        this.$router.push({
          name: "CarDetail",
     
        });
      }
    },
     toHome(){
       this.$router.push("/home");
      },
    //表格样式
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },

  data() {
    return {
      tableData: [],
      carname:""
    };
  },
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
