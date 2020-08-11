<template>
<div>
  <el-container>
  <el-aside width= 20vw ><p>买立达</p></el-aside>
  <el-container>
  <el-header>	
	<div class="search">
	  <el-button type="success" plain>登录</el-button>
  	<el-button type="info" plain>注册</el-button>
	</div>
	</el-header>
  <el-main>
    <div class="search-main">
    <el-input placeholder="请输入内容" v-model="input">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
   </el-input>
    </div>
  </el-main>
  </el-container>
</el-container>


  <!-- 图片轮播 -->
  <div>
  <img alt="Vue"  src="../../assets/timg.jpg"  width="100%" height="900vw" style="border-radius:10px;margin-top: 0.4vw;"/>
  </div>
 
<div>
<el-row :gutter="20">
  <el-col :span="6">
    <div class="grid-content bg-purple">
     <el-container>
      <div class="aside">
       <img class="img" alt="Vue logo" src="../../assets/lanbo.png"/>
      </div>
       <div class="main">兰博基尼</div>
    </el-container>
    </div>
  </el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</div>

<!-- 品牌显示-->
<div>
<el-row :gutter="20">
  <el-col :span="6">
    <div class="grid-content bg-purple">
     <el-container>
      <div class="aside">
       <img class="img" alt="Vue logo" src="../../assets/lanbo.png" />
      </div>
       <div class="main">兰博基尼</div>
    </el-container>
    </div>
  </el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</div>

<!-- 商品推荐 -->
<div class="recommend">
				<div class="recommend-line"></div>
				<p>推荐商品</p>
				<div class="recommend-line"></div>
	</div>

<ul class="cartype">
	<li onclick="location.href='businessList.html'">
	<img src="../../assets/timg.jpg" />
	<div class="cartype-p" >
		<p>奥迪 Q7</p>
		<h3>&#165;1000000.00</h3>
	</div>
	<input type="button" value="了解更多" class="button-b">
	</li>
		<li onclick="location.href='businessList.html'">
	<img src="../../assets/timg.jpg" />
	<div class="cartype-p" >
		<p>奥迪 Q7</p>
		<h3>&#165;1000000.00</h3>
	</div>
	<input type="button" value="了解更多" class="button-b">
	</li>
	<li onclick="location.href='businessList.html'">
	<img src="../../assets/timg.jpg" />
	<div class="cartype-p" >
		<p>奥迪 Q7</p>
		<h3>&#165;1000000.00</h3>
	</div>
	<input type="button" value="了解更多" class="button-b">
	</li>
	<li onclick="location.href='businessList.html'">
	<img src="../../assets/timg.jpg" />
	<div class="cartype-p" >
		<p>奥迪 Q7</p>
		<h3>&#165;1000000.00</h3>
	</div>
	<input type="button" value="了解更多" class="button-b">
	</li>
		<li onclick="location.href='businessList.html'">
	<img src="../../assets/timg.jpg" />
	<div class="cartype-p" >
		<p>奥迪 Q7</p>
		<h3>&#165;1000000.00</h3>
	</div>
	<input type="button" value="了解更多" class="button-b">
	</li>
</ul>

<ul class="footer">
				<li onclick="location.href='index.html'">
					<i class="fa fa-home"></i>
					<p>首页</p>
				</li>
				<li>
					<i class="fa fa-compass"></i>
					<p>我的收藏</p>
				</li>
				<li>
					<i class="fa fa-user-o"></i>
					<p>关于我们</p>
				</li>
			</ul>
</div>

</template>
<style>
/* 搜索部分 */
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
.search{
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin-top:1vw;
  margin-right: 2vw;
}
.search-main{
  margin-left: 45vw;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
  .el-aside p{
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size:6vw;
  font-style:italic;
  color: #ffffff;
  text-align:unset;
	/* line-height: 5vw; */
  font-weight: 400;
  text-shadow:2px 2px #00ffff;
  margin-left: 2vw;
 }
/* 商品推荐 */
/****************** 推荐商家部分 ******************/
.recommend{
	width: 100%;
	height: 14vw;
	display: flex;
	justify-content: center;
	align-items: center;
}
.recommend .recommend-line{
	width: 6vw;
	height: 0.2vw;
	background-color: #888;
}
.recommend p{
	font-size: 4vw;
}
/*底部菜单部分 */
 .footer{
 
	width: 100%;
	height: 15vw;
	background-color: #fff;	
	display: flex;
	justify-content: space-around;
	align-items: center;
  margin-top: 8vw;
  border:solid 3px rgb(102, 101, 101);
   background-color: rgb(54, 54, 54);
}
.footer li{
	/*li本身的尺寸完全由内容撑起*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #999;
	user-select: none;
	margin-top: 2vw;
}
.footer li p{
	font-size: 2.8vw;
}
.footer li i{
	font-size: 5vw;
}

  /* 商品推荐部分 */
	.cartype{
	width: 100%;
	height: 68vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	/*要使用align-content。10个子元素将自动换行为两行，而且两行作为一个整体垂直居中*/
	align-content: center;
}
.cartype li{
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
.cartype li img{
	width: 30vw;
	/*视频讲解时高度设置为12vw，实际上设置为10.3vw更佳*/
	height: 24vw;
	border-radius: 10px;
	box-shadow: 10px 10px 5px #888888;
}
.cartype .cartype-p{
	display: flex;
	justify-content: center;
}

.cartype  .cartype-p p{
	font-size: 2vw;
	color: #666;
	height: 3vw;
	font-weight:bold;
	text-shadow: 0px 0px 5px rgb(231, 39, 39);
}
.cartype .cartype-p h3
{
	color: white;
	margin-left: 2vw;
   font-size: 2vw;
   text-shadow: 5px 5px 15px hotpink,
  -5px 5px 35px hotpink,
  5px -5px 35px hotpink,
  -5px -5px 35px hotpink;
}
.button-b
{ 
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

  .img{
    width: 4.5vw;
    height:4.5vw;
    margin-top: 0.3vw;
    margin-bottom: 0.5vw;
    border-radius: 4px;
  }
  .aside{
    width: 7vw;
    height: 4vw;
  }

 .el-row {
   margin-top: 1vw;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
    text-align: center;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height:5vw;
  }

</style>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input: ''

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>