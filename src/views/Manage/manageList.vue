<template>

  <div class="wrapper">

  <h1 class="manah">
    我的管理中心<i class="fa fa-clipboard" ></i>
  </h1>
  <el-divider class="line01"></el-divider>
    <img src="../../assets/managelist2.jpg" alt />

    <!-- 主菜单 -->
    <a class="show" @click="Clickcircle($event,0)">管理列表</a>
    <ul>
      <!-- 子菜单 -->
      <li v-for="(item,index) of list" :key="index">
        <a @click="Clickcircle($event,index)">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'bubbling',
  data(){
    return {
      list:[{
        name:'用户管理',
        },
        {
          name:'汽车管理',
        }]
    }
  },
  methods:{
    Clickcircle(e,index){
      //获取点击的DOM对象
      let self = e.target
      //检查点击的是否是选中的圆
      if (self.classList.contains('selected')) {
        //如果是移除当前选中效果，返回上级菜单
        self.classList.remove('selected')
        //判断它的父级元素是不是顶级元素
        if (!self.classList.contains('wrapper')) {
          if(this.list[index].name=='汽车管理')
            this.$router.push({path:'/manageCar'})
          if(this.list[index].name=='用户管理')
            this.$router.push({path:'/manageUser'})
        }
        else {
          //如果是顶级元素，仅显示最顶级元素
          self.classList.add('show')
        }
      }
      else {
        //如果点击的不是选中的圆
        self.classList.add('selected')
        //判断是否点击的是顶级元素
        if (!self.parentNode.classList.contains('wrapper')) {
          //如果不是顶级元素，展开所点击的菜单列表
          self.parentNode.parentNode.parentNode.querySelector('a').classList.remove('selected')
        }
        else {
          //点击顶级元素展开一级菜单列表
          self.classList.remove('show')
        }
      }
      return false
    }
  }
}
</script>

<style scoped>

img {
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
}
.manah{
  color: rgb(5, 5, 5);
  position: absolute;
  left:610px;
  top: 10px;
  text-shadow:2PX 2PX 2PX #FFFFFF;

}
.line01{
  position: absolute;
  top: 50px;
  
}


ul {
  list-style: none;
}
a {
  width: 160px;
  height: 160px;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 160px;
  display: none; /*默认所有的a都不显示*/
  text-decoration: none;
  color: #333;
  transition: all 1.5s ease;
  box-shadow: 0 0 15px #222;
  font-size: 24px;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}
a.show {
  display: flex ; /*因为开始设置了a标签为none，这里重置display可以让他显示*/
}
/*对所有的li标签加动画效果*/
.wrapper li {
  transform: translate3d(0, 0, 0);
  transition: all 1s ease;
}
/*设置选中样式*/
.selected {
  background: rgba(51, 51, 51, 0.9);
  display: flex;
  /*调整中心圆形的位置*/
  top: calc(50% - 80px);
  left: calc(50% - 80px);
  color: #f1f1f1;
  animation: light 1s infinite;
}
/*让当前选中的子集列表显示*/
.selected + ul > li > a {
  /*让当前选中的子选项显示，因为默认是 display:none*/
  display: flex;
}
/*设置 li 的位置，rotate是顺/逆时针旋转，translateX是沿x轴平移*/
.selected + ul > li:nth-child(1) {
  transform: rotate(-164.5deg) translateX(160px);
}
/*设置a标签内字体的位置，应为容器旋转后，字体倾斜了，需要调整回来，
  字体的旋转角度正好和外部容器的旋转角度相反，但是最后一个的位置需要调整*/
.selected + ul > li:nth-child(1) > a {
  transform: rotate(164.5deg);
}
.selected + ul > li:nth-child(2) {
  transform: rotate(-60deg) translateX(130px);
}
.selected + ul > li:nth-child(2) > a {
  transform: rotate(60deg);
}
</style>
