<template>
  <div class="login">
    <el-col :span="14" :offset="5">
      <el-card class="box-card">
        <el-col :span="24" class="img_log">
          <el-col :span="12" class="img_logo">
            <img alt="Vue logo" src="../../assets/Login.png" />
          </el-col>

          <el-col :span="12">
            <el-form
              :model="loginForm"
              status-icon
              :rules="rules"
              ref="loginForm"
              label-width="100px"
              class="demo-loginForm"
            >
              <el-form-item>
                <h3>会员登陆</h3>
              </el-form-item>

              <el-form-item label prop="username">
                <el-input
                  type="text"
                  v-model="loginForm.username"
                  autocomplete="off"
                  prefix-icon="el-icon-user-solid"
                  placeholder="用户名"
                ></el-input>
              </el-form-item>

              <el-form-item label prop="userpassword">
                <el-input
                  type="userpassword"
                  v-model="loginForm.userpassword"
                  autocomplete="off"
                  prefix-icon="el-icon-lock"
                  placeholder="密码"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-radio v-model="type" label="1">用户</el-radio>
                <el-radio v-model="type" label="2">管理员</el-radio>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')" round>登录</el-button>
              </el-form-item>
              <el-form-item>
                <el-link @click="toRegister">
                  还没有账号？立即注册
                  <i class="el-icon-right"></i>
                </el-link>
              </el-form-item>
            </el-form>
          </el-col>
        </el-col>
      </el-card>
    </el-col>
  </div>
</template>


<style scoped>
.login {
  background-color: rgb(187, 159, 214);
  height: 48vw;
}
/* 布局 */
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
/* 输入和按钮 */
.el-input {
  border-radius: 30px;
}
.el-button {
  width: 220px;
}
/* 卡片 */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
  height: 32vw;
  /* position: relative; */
  margin-top: 5em;
  border-radius: 30px;
}
.img_log {
  /* position: relative; */
  margin-top: 2em;
}
.img_logo {
  /* position: relative; */
  margin-top: 3em;
}
img {
  width: 100%;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "Login"
};
</script>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

    return {
      type: '1',
      loginForm: {
        username: "",
        userpassword: ""
      },
      rules: {
        userpassword: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  // created() {
  //   const _this = this;
  //   this.$axios
  //     .post("user/login", this.$qs.stringify(this.loginForm))
  //     .then(reso => {
  //       _this.$console.log(resp);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (_this.type == '1') {
            this.$axios
              .post("user/login", this.$qs.stringify(this.loginForm))
              .then(res => {
                this.$setSessionStorage("user", res.data.obj);
                // _this.console.log(res.data);
                if (res.data.status == 0) {
                  this.$message({
                    message: "登陆成功！",
                    type: "success"
                  });
                  _this.$router.push({ name: "Home" });
                } else {
                  _this.$alert(res.data.msg, "", {
                    confirmButtonText: "确定",
                    callback: action => {
                      this.$router.go(0);
                      // _this.loginForm.resetFields()
                    }
                  });
                }
              });
          }
          else if(_this.type=='2'){
              this.$axios
            .post("admin/login", this.$qs.stringify({
              adminid : _this.loginForm.username,
              adminpw : _this.loginForm.userpassword
            }))
            .then(res => {
              this.$setSessionStorage('admin',_this.loginForm);
              console.log(res.data);
              if (res.data.status == 0) {
                this.$message({
                  message: "登陆成功！",
                  type: "success",
                  
                });
                 _this.$router.push({name:'manageList'})
              }
              else{
                  _this.$alert(res.data.msg,'',{
                  confirmButtonText:'确定',
                      callback:action => {
                        this.$router.go(0)
                          // _this.loginForm.resetFields()
                      },
                  })
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toRegister() {
      this.$router.push("/register");
    }
    // open2() {
    //     this.$message({
    //       message: '登录成功',
    //       type: 'success'
    //     });
    //   },
  }
};
</script>