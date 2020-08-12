<template>
  <div id="app">
    <el-header class="appHeader" style="padding: 0 0">
      <div v-if="this.$route.path!='/login'&&this.$route.path!='/register'" class="search">
        <p v-if="this.$getSessionStorage('user')==null&&this.$getSessionStorage('admin')==null">
          <el-link :underline="false" @click="toLogin" type="danger">
            <i class="el-icon-user"></i>
            登录
          </el-link>

         
        </p>
        <p v-else-if="this.$getSessionStorage('user')!=null">
          <el-link :underline="false" @click="cancelUser">
            <i class="el-icon-user-solid"></i>
            {{this.$getSessionStorage('user').username}}
          </el-link>
        </p>
        <p v-else-if="this.$getSessionStorage('admin')!=null">
          <el-link :underline="false" @click="cancelAdmin">
            <i class="el-icon-user-solid"></i>
            {{this.$getSessionStorage('admin').username}}
          </el-link>
        </p>
      </div>
    </el-header>
    <!-- <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
       <router-link to="/register">Register</router-link>
      <router-link to="/collections">Collections</router-link>
  <router-link to="/CarDetail">CarDetail</router-link>
      <router-link to="/manageuser">manageUser</router-link>
      <router-link to="/managelogin">manageLogin</router-link>
      <router-link to="/managecar">manageCar</router-link>
    <router-link to="/managelist">manageList</router-link>-->

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
.appHeader
 {
  /* text-align: center; */
  /* line-height: 1vw; */
  position: absolute;
  top: 1vw;
  width: 100%;
  right: 3vw;
  z-index: 1;

  
}
.search {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  /* margin-top: 0.4vw; */
  margin-right: 2vw;
}
</style>
<script>
export default {
  methods: {
    cancelUser() {
      this.$confirm("是否退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$removeSessionStorage("user");
          this.$router.go(0);
          this.$message({
            type: "success",
            message: "已退出"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    cancelAdmin() {
      this.$confirm("是否退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$removeSessionStorage("admin");
          this.$router.push({ name: "Home" });
          this.$message({
            type: "success",
            message: "已退出"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>