 <template>
    <div class="managelist">
        <el-container>
            <el-header>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#FE929F"
                    text-color="#000"
                    active-text-color="#000">
                <template slot="title"></template>
                <el-menu-item index="1" width="100%" text-align="center">我的管理中心</el-menu-item>
                </el-menu>
                </el-header>
        <el-container>
        <el-aside width="150px">
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#FE929F"
                text-color="#fff"
                active-text-color="#FE929F">
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-submenu index="3">
    
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
            <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
         </el-submenu>
  </el-submenu>
  
  <!-- <a href="http://localhost:8091/#/managecar" target="_blank">汽车管理</a>
  <el-menu-item index="5"><a href="http://localhost:8091/#/manageuser" target="_blank">用户管理</a></el-menu-item> -->

<!-- 页面跳转 -->
<el-menu-item index="4">
<router-link to="/manageuser">前往用户管理中心</router-link>
</el-menu-item>
<el-menu-item index="5">
<router-link to="/managecar">前往汽车管理中心</router-link>
</el-menu-item>
</el-menu>
      </el-aside>
        <el-main>
            请在左边选择管理详情，这里啥也没有！
            
        </el-main>
    </el-container>
        </el-container>

 </div>
</template>

<script>
  export default {
    name: 'managelist',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-container{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
}
.el-header{
  width: 100%;
    padding: 0;
    z-index: 10000;
}
.el-header .fr{
    float: right;
}
.el-header .el-menu{
    border-bottom: 60px;
}
.el-aside{
    background-color: #FCD3D1;
}
.el-aside .el-menu{
    border-right: none;
}
.el-main{
    background-color: #E5EDF8;
    color: #333;
    text-align: center;
    line-height: 160px;
}

</style>