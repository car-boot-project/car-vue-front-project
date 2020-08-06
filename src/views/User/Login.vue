<template>
  <div class="login">
    <el-row :gutter="20">
      <el-col :span="14" :offset="5">
        <el-card class="box-card">
          <el-col :span="24" class="img_log">
            <el-col :span="12" class="img_logo">
              <img alt="Vue logo" src="../../assets/logo.png" />
            </el-col>

            <el-col :span="12">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item>
                  <h3>会员登陆</h3>
                </el-form-item>

                <el-form-item label prop="username">
                  <el-input
                    type="text"
                    v-model="ruleForm.username"
                    autocomplete="off"
                    prefix-icon="el-icon-user-solid"
                    placeholder="用户名"
                  ></el-input>
                </el-form-item>

                <el-form-item label prop="password">
                  <el-input
                    type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                    prefix-icon="el-icon-lock"
                    placeholder="密码"
                    show-password
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')" round>登录</el-button>
                </el-form-item>
                <el-form-item>
                  <el-link href="#">
                    还没有账号？立即注册
                    <i class="el-icon-right"></i>
                  </el-link>
                </el-form-item>
              </el-form>
            </el-col>
            
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>


<style scoped>
.login {
  background-color: rgb(187, 159, 214);
  height: 30em;
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
  width: 20em;
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
  height: 20em;
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
        // if (this.ruleForm.checkPass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        // if (this.ruleForm.checkPass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
      }
    };

    return {
      ruleForm: {
        password: "",
        username: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
          this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('api/v1/user/login.do',this.ruleFormRe).then(
                            function(resp){
                                console.log(resp);
                            //     if(resp.code==0){
                            //         _this.$alert('注册成功','提示',{
                            //             confirmButtonText:'确定',
                            //             callback:action => {
                            //                 _this.$router.push({name:'Login'})
                            //             }
                            //         });

                            //     }
                            // }
                        


                    })
                    }
                    else {
                        console.log('error submit!!');
                        return false;
                    }
                });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // open2() {
    //     this.$message({
    //       message: '登录成功',
    //       type: 'success'
    //     });
    //   },
  }
};
</script>