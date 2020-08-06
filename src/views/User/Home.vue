<template>
<div>
	<div class="search">
		<!-- 当滚动条超过上面的定位块时，search-fixed-top块变成固定在顶部。 -->
			<div class="search-fixed-top" id="fixedBox">
				<!-- 搜索框部分中间的白框 -->
				<div class="search-box">
					<i class="fa fa-search"></i>搜索汽车、汽车品牌
				</div>
		</div>
	</div>

  <!-- 图片轮播 -->
  <div>
  <img alt="Vue"  src="../../assets/timg.jpg"  width="100%" height="900px" style="border-radius: 4px;margin-top: 0.4vw;"/>
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

<!-- 品牌推荐 -->
<div style="height:10vw">
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
<!-- 图片推荐 -->
<ul class="foodtype">
				<li>
					<img src="../../assets/timg01.jpg" />
					<p>奥迪Q5</p>
           <el-button type="info" round class="foodtype-button">了解更多</el-button>
				</li>
				<li>
					<img src="../../assets/timg01.jpg" />
					<p>奥迪Q5</p>
           <el-button type="info" round class="foodtype-button">了解更多</el-button>
				</li>
				<li>
					<img src="../../assets/timg01.jpg" />
					<p>奥迪Q5</p>
           <el-button type="info" round class="foodtype-button">了解更多</el-button>
				</li>
				<li>
					<img src="../../assets/timg01.jpg" />
					<p>奥迪Q5</p>
           <el-button type="info" round class="foodtype-button">了解更多</el-button>
				</li>
				<li>
					<img src="../../assets/timg01.jpg" />
					<p>奥迪Q</p>
           <el-button type="info" round class="foodtype-button">了解更多</el-button>
				</li>
			</ul>
</div>
</div>

</template>
<style>
/* 首页推荐牌子 */
.foodtype{
	width: 100%;
	height: 77vw;
	
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	/*要使用align-content。10个子元素将自动换行为两行，而且两行作为一个整体垂直居中*/
	align-content: center;
}
.foodtype li{
	/*一共10个子元素，通过计算，子元素宽度在16.7 ~ 20 之间，才能保证换两行*/
	width: 26vw;
	height: 40vw;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	user-select: none;
	cursor: pointer;
}
.foodtype li img{
	width: 25vw;
	/*视频讲解时高度设置为12vw，实际上设置为10.3vw更佳*/
  box-shadow: 10PX 10px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5PX;
	height:25vw;

}
.foodtype li p{
	font-size: 2vw;
	color: #666;
}
.foodtype .foodtype-button{
  width: 10vw;
  height: 3vw;
  font-size: 2vw;
  text-shadow:3px 3px #489ee4;;
}

/* 搜索 */
  .search{
	width: 100%;
	height: 9vw;
  background-color: #57595a;
  border-radius: 4px;
}
.search .search-fixed-top{
	width: 100%;
	height: 9vw;
	
	display: flex;
	justify-content: center;
	align-items: center;
}
.search .search-fixed-top .search-box{
	width: 90%;
	height: 7vw;
	background-color: rgb(255, 249, 249);
	border-radius: 2px;
	
	display: flex;
	justify-content: center;
	align-items: center;
	
	font-size: 3.5vw;
	color: #AEAEAE;
	font-family: "宋体";
	
	user-select: none;
}
.search .search-fixed-top .search-box .fa-search{
	margin-right: 20px;
}

  .main{
     font-size: 2vw;
     color: dimgrey;
     font-weight:bold;
     margin-left: 4.5vw;
     margin-top: 1.5vw;
  
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
    height: 5vw;
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