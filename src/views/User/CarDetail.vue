<template>
  <div id="cardetail">
    <!-- <Header></Header> -->
        <h3>
      <i class="fa fa-info-circle" aria-hidden="true"></i>商品详情
    </h3>
    <el-divider></el-divider>
    
    <div class="container">
        <el-page-header @back="goBack" content></el-page-header>
    

      <el-card class="box-card" >
        <div class="container">
            <el-row :gutter="80">
          <el-col :span="12">
              <el-row>
                <div class="pro-img">
              <img v-bind:src="car.carimg" alt="详情图" width="100%" />
            </div>
              </el-row>
              <el-row >
                         <el-rate v-model="ifCollect" :max=1 > </el-rate>
                         <p>收藏</p>               
               
                 

              </el-row>
            
          </el-col>

          <el-col :span="12">
            <el-row>
              <el-col :span="24">
                <h3>{{car.carname}}</h3>
              </el-col>
            </el-row>
            <el-row class="price">
              <el-col :span="4">
                <p style="margin:0 auto">价格：</p>
              </el-col>
              <el-col :span="20" >
                <h4>￥{{car.carprice}}</h4>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="4">
                  <p>
                      详情：
                  </p>
                  </el-col>
              <el-col :span="20">
                  <p class="black_left">{{car.carnote}}</p></el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                  <p>
                       库存：
                  </p>
                 </el-col>
              <el-col :span="20">
                  <p class="black_left">{{car.carstock}}</p></el-col>
            </el-row>
            <el-row>
              <el-col >
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
      ifCollect:0
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
      const id = this.$route.params.carid;
    // const id = 10090212;
    //   console.log(id);

    this.$axios.get("car/detail?carid=" + id).then(res => {
      console.log(res.data);
      _this.car = res.data;
    });
  },
  methods:{
         goBack() {
      this.$router.go(-1);
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
.el-row  {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col h4 {
   margin: 5px auto;
   color: red;
 
  }
 
  p{
       margin-top: 0;
      color: #999999;
      
  }
  .black_left{
      color: black;
text-align: left;
  }
  .price{
      text-align: left;
      /* background-color:#E7E7E7; */
  }

</style>