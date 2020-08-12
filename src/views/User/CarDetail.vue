<template>
  <div id="cardetail">
    <!-- <Header></Header> -->
    <h3>
      <i class="fa fa-info-circle" aria-hidden="true"></i>商品详情
    </h3>
    <el-divider></el-divider>

    <div class="container">
      <el-page-header @back="goBack" content></el-page-header>

      <el-card class="box-card">
        <div class="container">
          <el-row :gutter="80">
            <el-col :span="12">
              <el-row>
                <div class="pro-img">
                  <img v-bind:src="car.carimg" alt="详情图" width="100%" />
                </div>
              </el-row>
              <el-row>
                <el-button
                  v-if="ifCollect"
                  type="warning"
                  icon="el-icon-star-on"
                  circle
                  @click="cancelCollect"
                ></el-button>
                <el-button v-else type="warning" icon="el-icon-star-off" circle @click="addCollect"></el-button>

                <!-- <i v-if="ifCollect" class="el-icon-star-off" style="color=yellow"></i>
                <i v-else class="el-icon-star-on" style="color=yellow" ></i>-->
                <p v-if="ifCollect">取消收藏</p>
                <p v-else>加入收藏</p>
              </el-row>
            </el-col>

            <el-col :span="12">
              <el-row>
                <el-col :span="24">
                  <h3>{{car.carname}}</h3>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <p>价格：</p>
                </el-col>
                <el-col :span="20" class="price">
                  <h4>￥{{car.carprice}}</h4>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="4">
                  <p>详情：</p>
                </el-col>
                <el-col :span="20">
                  <p class="black_left">{{car.carnote}}</p>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <p>库存：</p>
                </el-col>
                <el-col :span="20">
                  <p class="black_left">{{car.carstock}}</p>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-button type="primary" plain>立即购买</el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <!-- /.pro-text -->
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'
export default {
  name: "CarDetail",
  data: function() {
    return {
      car: {},
      ifCollect: 0,
      id: 0
      //   imgSrc: require("../../assets/Login.png"),
      //   author: "作者",
      //   book: "猪饲料的使用方法",
      //   recommendStar: 5,
      //   price: 99.9,
      //   lastPrice: 150,
      //   publisher: "人文出版社"
    };
  },
  created() {
    const _this = this;
    _this.id = this.$route.params.carid;
    // const id = 10090212;
    //   console.log(id);

    this.$axios.get("car/detail?carid=" + _this.id).then(res => {
      console.log(res.data);
      _this.car = res.data;
    });

    this.$axios
      .post(
        "collects/in_collects",
        this.$qs.stringify({
          userid: this.$getSessionStorage("user").userid,
          carid: _this.id
        })
      )
      .then(res => {
        console.log(res.data);
        _this.ifCollect = res.data;
      });
  },
  methods: {
    getData() {
      const _this = this;

      this.$axios
        .post(
          "collects/in_collects",
          this.$qs.stringify({
            userid: this.$getSessionStorage("user").userid,
            carid: _this.id
          })
        )
        .then(res => {
          console.log(res.data);
          _this.ifCollect = res.data;
        });
    },

    goBack() {
      this.$router.go(-1);
    },
    addCollect() {
      const _this = this;
      this.$axios
        .post(
          "collects/add_car",
          this.$qs.stringify({
            userid: this.$getSessionStorage("user").userid,
            carid: _this.id
          })
        )
        .then(res => {
          console.log(res);
          _this.getData();
          if (res.data.status == 0) {
            _this.getData();
            this.$message({
              message: "收藏成功！",
              type: "success"
            });
          }
          //刷新页面
        });
    },

    cancelCollect() {
      const _this = this;
      this.$axios
        .post(
          "collects/remove",
          this.$qs.stringify({
            userid: this.$getSessionStorage("user").userid,
            carid: _this.id
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
    }
  }
};
</script>

<style scoped>
.box-card {
  width: 80%;
  margin: 0 auto;
  /* margin-top: 100px; */
  /* background-color: rgb(255, 236, 250); */
}
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col h4 {
  margin: 5px auto;
  color: red;
}

p {
  margin-top: 0;
  color: #999999;
}
.black_left {
  color: black;
  text-align: left;
}
.price {
  text-align: left;
  /* background-color:#E7E7E7; */
}
</style>