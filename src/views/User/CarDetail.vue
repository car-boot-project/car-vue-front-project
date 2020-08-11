<template>
    <div id="cardetail">
        <!-- <Header></Header> -->
        <div class="container">
            <el-card class="box-card" center>
                <div class="container">
                <el-row :gutter="20">
  <el-col :span="12"><div class="pro-img"><img v-bind:src=" carimg" alt="2" width="100%" >
                                </div></el-col>
  <el-col :span="12"><div class="pro-text-outer list-pro-text">
                                    <span>{{ carbrand}} </span>
                                    <h4>{{ carname}}</h4>
                                

                                    
                                    <p class="wk-price">￥{{ carprice}} </p>
                                    <p>{{ carmodel}}</p>
                                    <p>{{ carnote}}</p>
                                    <p>{{ carstock}}</p>
                                    <div id="buy">
                                        <el-button plain>收藏</el-button>

                                        <router-link to="Shopping_chart"><el-button type="primary" plain>立即购买</el-button></router-link>
                                    </div>



                                </div></el-col>
                </el-row>
                

                </div>
            </el-card>

        </div>
    </div>
</template>

<script>
    // import Header from '@/components/Header.vue'
    export default {
        name: "CarDetail",
        data:function () {
            return{

                //   carid: 0,
        carname: "奔驰A4",
        carbrand: "奔驰",
        carstock: 0,
        carimg: require('../../assets/timg.jpg'),
        carprice: 1250000,
        carmodel: "A4",
        carnote: "这款车"
                // imgSrc: require('../../assets/Login.png'),
                // author:"奔驰",
                // book:"奔驰 A4",
                // recommendStar:"A4",
                // price:99.9,
                // carnote:"这款车",
                // carstock:15,



            }},
     
     
     

    }
</script>

<style scoped>
 .box-card{
     /*width: 80%;*/
     padding: 50px ;
     margin: 70px;
 }
    #buy{
        margin: 30px 0;
    }
</style>