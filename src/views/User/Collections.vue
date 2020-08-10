<template>
  <div class="collections">
    <h3>
      <i class="fa fa-heart" aria-hidden="true"></i>我的收藏
    </h3>
    <el-divider></el-divider>

      <el-page-header @back="goBack" content></el-page-header>

      <el-table
        :data="car"
        style="width: 90%"
      >
        <el-table-column label="" prop="carimg" >
  
        </el-table-column>

        <el-table-column label="车名" prop="carname">

        
        </el-table-column>
        <el-table-column label="品牌" prop="carbrand"></el-table-column>
        <el-table-column label="价格" prop="carprice"></el-table-column>
        <el-table-column label="车型" prop="carmodel"></el-table-column>
        <el-table-column label="描述" prop="carnote"></el-table-column>
        <el-table-column label="库存" prop="carstock"></el-table-column>
        <el-table-column align="right">
          <!-- <template slot="header" slot-scope>
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template> -->
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
  
  </div>
</template>
<style  scoped>
.el-table{

  margin:0 auto;
  
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "Collections",
  components: {},
  data() {
    return {
       car:[ 
      ],
    //   carid: 0,
    //   carname: "",
    //   carbrand: "",
    //   carstock: 0,
    //   carimg: "",
    //   carprice: 0,
    //   carmodel: "",
    //   carnote: ""
    // }

     userid:2020010010,
      search: ""
    };
  },
    mounted() {
    const _this = this;

    this.$axios
      .post("collects/get_collects_list_by_userid", this.userid)
      .then(res => {
        console.log(res.data);
         console.log(this.userid);
        // this.car = res.data;
        
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    goBack() {
      console.log("go back");
    }
  }
};
</script>
