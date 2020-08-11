<template>
    <div id="cardetail">
        <!-- <Header></Header> -->
        <div class="container">
            <el-card class="box-card" center>
                <div class="container">

                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <!-- .pro-text -->
                        <div class="pro-text">
                            <div class="col-xs-12 col-sm-5 col-md-5">
                                <!-- .pro-img -->
                                <div class="pro-img"><img v-bind:src=" imgSrc" alt="2" width="300px" height="300px">
                                </div>
                                <!-- /.pro-img -->
                            </div>
                            <div class="col-xs-12 col-sm-7 col-md-7">
                                <div class="pro-text-outer list-pro-text">
                                    <span>{{ author}} 著</span>
                                    <h4>{{ book}}</h4>
                                    <div class="star2">
                                        <div class="block">
                                            <!--<span class="demonstration">默认不区分颜色</span>-->
                                            <el-rate v-model="recommendStar"  disabled></el-rate>
                                        </div>
                                    </div>
                                    <p class="wk-price">￥{{ price}} <span>￥{{lastPrice}}</span></p>
                                    <p>{{ publisher}}</p>
                                    <div id="buy">
                                        <el-button plain>加入购物车</el-button>

                                        <router-link to="Shopping_chart"><el-button type="primary" plain>立即购买</el-button></router-link>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <!-- /.pro-text -->
                    </div>

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
                imgSrc: require('../../assets/Login.png'),
                author:"作者",
                book:"猪饲料的使用方法",
                recommendStar:5,
                price:99.9,
                lastPrice:150,
                publisher:"人文出版社",



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