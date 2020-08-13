
<template>
<div class="about">
  <div id="round" style="float:left;margin-top:30px;">
  <el-menu>
    <el-menu-item>
      <el-link @click="toHome">
        <i class="el-icon-back"></i>返回首页
    </el-link>
    </el-menu-item>
  </el-menu>
  </div>

 <h1>
  关于我们
 </h1>
<div class="main" style="float:right;">企业发展
</div>
<el-divider></el-divider>
<div style="margin-top:100px;float:left;text-indent:100px; font-size:40px;">
<h2>本网站成立于2020年8月，致力于为受众提供便捷的买车服务，实现足不出户购买汽车。</h2>
<p>提供一流的服务</p>
</div>
</div>

</template>
<style>
h1{
    color: red;
    font-size: 2vw;
}
.main{
  margin-top:10px;
}
</style>
<script>

   export default {
  //  返回首页
    methods:{
      toHome() {
       this.$router.push("/home");
      console.log("成功");
    },
    }
 }
</script>
  