<template>
  <div class="collections">
      <h3><i class="fa fa-heart" aria-hidden="true"></i>我的收藏</h3>
     <el-divider></el-divider>
    <el-page-header @back="goBack" content="" >
      
    </el-page-header>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Collections",
  components: {},
     methods: {
      goBack() {
        console.log('go back');
      }
    }
};
</script>
