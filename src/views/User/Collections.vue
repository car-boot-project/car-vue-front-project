<template>
  <div class="collections">
    <h3>
      <i class="fa fa-heart" aria-hidden="true"></i>我的收藏
    </h3>
    <el-divider></el-divider>

    <el-page-header @back="goBack" content></el-page-header>

    <el-table :data="car" style="width: 80%">
      <el-table-column label width="200px">
        <template slot-scope="scope">
          <img :src="scope.row.carimg" alt @click="toDetail(scope.row)" />
        </template>

        <!-- <img :src='data:image/png;base64,'+carimg alt=""> -->
      </el-table-column>

      <el-table-column label="车名" prop="carname" width="200px"></el-table-column>
      <el-table-column label="品牌" prop="carbrand"></el-table-column>
      <el-table-column label="价格" prop="carprice"></el-table-column>
      <el-table-column label="车型" prop="carmodel"></el-table-column>
      <el-table-column label="描述" prop="carnote" width="300px"></el-table-column>
      <el-table-column label="库存" prop="carstock" width="80px"></el-table-column>
      <el-table-column align="right">
        <!-- <template slot="header" slot-scope>
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>-->
        <template slot-scope="scope">
          <el-button
            type="warning"
            icon="el-icon-star-off"
            circle
            @click="CancelCollect(scope.row)"
          ></el-button>
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
          <!-- <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style  scoped>
.el-table {
  /* background-color: rgb(187, 159, 214); */
  margin: 0 auto;
}
img {
  width: 100%;
}
.el-table-column {
  margin: 0 auto;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "Collections",
  components: {},
  data() {
    return {
      car: [],
      //   carid: 0,
      //   carname: "",
      //   carbrand: "",
      //   carstock: 0,
      //   carimg: "",
      //   carprice: 0,
      //   carmodel: "",
      //   carnote: ""
      // }

      // userid: 2020010004,
      search: ""
    };
  },
  methods: {
    // CancelCollect(row) {
    //   const _this = this;
    //   this.$axios
    //     .post("collects/remove?userid=" + this.userid + "&carid=" + row.carid)
    //     .then(res => {
    //       console.log(res);
    //       if (res.data.status == 0) {
    //             _this.getData();
    //         this.$message({
    //           message: "取消收藏成功！",
    //           type: "success"
    //         });

    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },

    CancelCollect(row) {
      const _this = this;
      this.$axios
        .post(
          "collects/remove",
          this.$qs.stringify({
            userid: this.$getSessionStorage("user").userid,
            carid: row.carid
          })
        )
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            _this.getData();
            this.$message({
              message: "取消收藏成功！",
              type: "success"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    getData() {
      const _this = this;

      this.$axios
        .post(
          "collects/get_collects_list_by_userid",
          this.$qs.stringify({
            userid: this.$getSessionStorage("user").userid
          })
        )
        .then(res => {
          // console.log(res);
          // console.log(_this.$getSessionStorage("user").userid);
          this.car = res.data.obj;
        })
        .catch(error => {
          console.log(error);
        });
    },
    toDetail(row) {
      this.$router.push({
        name: "CarDetail",
        params: {
          carid: row.carid
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    const _this = this;

    this.$axios
      .post(
        "collects/get_collects_list_by_userid",
        this.$qs.stringify({
          userid: _this.$getSessionStorage("user").userid
        })
      )
      .then(res => {
        console.log(res);
        // console.log(_this.$getSessionStorage("user").userid);
        this.car = res.data.obj;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
