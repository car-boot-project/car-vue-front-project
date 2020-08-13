<template>
  <div class="home">
 <el-container style="width:100%;height:8vw;background-color: rgba(180, 56, 118,0.4); border-radius: 10px;">
  <el-aside width= 20vw>买立达</el-aside>
  <el-container>
    <el-main>
    <div class="search-main">
    <el-input placeholder="请输入内容" v-model="carname" @change="toSearch">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
  </el-main>

  </el-container>
</el-container>
    <!-- 图片轮播 -->
    <el-row>
      <div>
        <el-carousel indicator-position="outside" height="50vw">
          <el-carousel-item v-for="(item, index) in item" :key="index">
            <div class="item-img">
              <img :src="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
 
    <!-- 商品推荐 -->
    <div class="recommend">
      <div class="recommend-line"></div>
      <p>推荐商品</p>
      <div class="recommend-line"></div>
    </div>

    <ul class="cartype">
      <li v-for="(car, index) in cars" :key="index">
        <img :src="car.carimg" />
        <div class="cartype-p">
          <p>{{ car.carname }}</p>
          <h3>&#165;{{ car.carprice }}</h3>
        </div>
        <input
          type="button"
          value="了解更多"
          class="button-b"
          @click="toDetail(car.carid)"
        />
      </li>
    </ul>

    <ul class="footer">
      <li onclick="location.href='index.html'">
        <i class="fa fa-home"></i>
        <p>首页</p>
      </li>
      <li>
        <i class="fa fa-compass"></i>
        <p @click="toCollections">我的收藏</p>
      </li>
      <li>
        <i class="fa fa-user-o"></i>
        <p @click="toAbout">关于我们</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    const _this = this;
    this.$axios
      .get(
        "admin/get_all_car_by_page?page=" + this.page + "&offset=" + this.offset
      )
      .then((res) => {
        //  console.log(res.data);
        this.cars = res.data.list;
        // this.car = res.data.list;
        // console.log(res.data);
      });
  },
  data: function() {
    return {
      carname:"",
      page: 1,
      offset: 5,
      cars: [],
      carImg: require("../../assets/timg.jpg"),
      carName: "奔驰 gl450",
      carPrice: "100000.00",
      input: "",
      item: [
        require("../../assets/timg 04.jpg"),
        require("../../assets/timg04.jpg"),
        require("../../assets/timg03.jpg"),
        require("../../assets/timg01.jpg"),
      ],
    };
  },
  methods: {
       toCollections() {
       if (this.$getSessionStorage("user") === null) {
        this.$message({
          message: "请先登录！",
          type: "warning",
        });
        return;
      } else {
        this.$router.push("/collections");
      }
    },
    // 到达详情页
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
    //搜索结果页
    toSearch(carname){
      if(carname === null || carname === ''){
        return;
      }
       this.$router.push({
          name: "Search",
          query:{
            carname:this.carname
          }
        });
        this.carname="";
    },
    // 关于我们
    toAbout() {
      this.$router.push("/about");
    },
  },
};
</script>
<style>

/* 走马灯 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.item-img img {
  width: 100%;
  height: 50vw;
  border-radius: 10px;
  border-style: dashed;
  border: #00ffff;
}
/* 搜索部分 */
.el-aside {
  
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size:6vw;
  font-style:italic;
  color: #ffffff;
  text-align:unset;
	line-height: 5vw;
  font-weight: 400;
  text-shadow:2px 2px #00ffff;
  margin-left: 2vw;
  line-height: 6vw;
  margin-top:1vw;
 }


.el-main {
  text-align: center;
  line-height: 1vw;
  /* background-color: rgba(0,0,0,0.5);  */
  }

.search-main{

  padding-top: 2vw;
  width: 30%;
  align-content: center;
}
/* 商品推荐 */
/****************** 推荐商家部分 ******************/
.recommend {
  width: 100%;
  height: 14vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.recommend .recommend-line {
  width: 6vw;
  height: 0.2vw;
  background-color: #888;
}
.recommend p {
  font-size: 4vw;
}
/*底部菜单部分 */
.footer {
  width: 100%;
  height: 15vw;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8vw;
  border: solid 3px rgb(102, 101, 101);
  background-color: rgb(54, 54, 54);
}
.footer li {
  /*li本身的尺寸完全由内容撑起*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
  user-select: none;
  margin-top: 2vw;
}
.footer li p {
  font-size: 2.8vw;
}
.footer li i {
  font-size: 5vw;
}
/* 搜索部分 */
.el-aside {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 6vw;
  font-style: italic;
  color: #ffffff;
  text-align: unset;
  line-height: 5vw;
  font-weight: 400;
  text-shadow: 2px 2px #00ffff;
  margin-left: 2vw;
  line-height: 6vw;
}

.el-main {
  text-align: center;
  line-height: 1vw;
  background-color: rgba(0, 0, 0, 0.5);
}

.search-main {
  margin-left: 20vw;
  padding-top: 4.5vw;
  width: 30%;
  align-content: center;
}

/* 商品推荐部分 */
.cartype {
  width: 100%;
  height: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /*要使用align-content。10个子元素将自动换行为两行，而且两行作为一个整体垂直居中*/
  align-content: center;
}
.cartype li {
  /*一共10个子元素，通过计算，子元素宽度在16.7 ~ 20 之间，才能保证换两行*/
  width: 31vw;
  height: 40vw;
  display: flex;
  /*弹性盒子主轴方向设为column，然后仍然是垂直水平方向居中*/
  flex-direction: column;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
}
.cartype li img {
  width: 30vw;
  /*视频讲解时高度设置为12vw，实际上设置为10.3vw更佳*/
  height: 24vw;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #888888;
}
.cartype .cartype-p {
  display: flex;
  justify-content: center;
}

.cartype .cartype-p p {
  font-size: 2vw;
  color: #666;
  height: 3vw;
  font-weight: bold;
  text-shadow: 0px 0px 5px rgb(231, 39, 39);
}
.cartype .cartype-p h3 {
  color: white;
  margin-left: 2vw;
  font-size: 2vw;
  text-shadow: 5px 5px 15px hotpink, -5px 5px 35px hotpink,
    5px -5px 35px hotpink, -5px -5px 35px hotpink;
}
.button-b {
  font-size: 2vw;
  color: white;
  font-size: 200;
  width: 9vw;
  height: 4vw;
  background-color: rgb(10, 112, 245);
  border-radius: 20px;
  text-shadow: 0px 0px 5px rgb(109, 104, 104);
  margin-bottom: 2vw;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  text-align: center;
}

.grid-content {
  border-radius: 4px;
  min-height: 5vw;
}
.main {
  margin-left: 3vw;
  font-size: 2vw;
  color: #00ffff;
  font-weight: bolder;
  margin-top: 1vw;
}
.img {
  width: 4.5vw;
  height: 4.5vw;
  margin-top: 0.3vw;
  margin-bottom: 0.5vw;
  margin-left: 3vw;
  border-radius: 4px;
}

.el-row {
  margin-top: 1vw;
}
</style>
