<template>
  <div class="register">
    <img src="../../assets/Register.jpg" alt />

    <el-col :span="10" :offset="7">
      <el-card class="box-card" shadow="hover">
        <el-form
          :model="registerForm"
         
          :rules="rules"
          ref="registerForm"
    
          class="demo-registerForm"
        >
          <el-form-item>
            <h2>会员注册</h2>
          </el-form-item>

          <el-form-item label prop="username">
            <el-input
              type="text"
              v-model="registerForm.username"
              autocomplete="off"
              prefix-icon="el-icon-user-solid"
              placeholder="用户名"
            ></el-input>
          </el-form-item>

          <el-form-item label prop="userpassword">
            <el-input
              type="userpassword"
              v-model="registerForm.userpassword"
              autocomplete="off"
              prefix-icon="el-icon-lock"
              placeholder="密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label prop="checkPass">
            <el-input
              type="userpassword"
              v-model="registerForm.checkPass"
              autocomplete="off"
              prefix-icon="el-icon-lock"
              placeholder="确认密码"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item label prop="userphone">
            <el-input
              type="text"
              v-model="registerForm.userphone"
              autocomplete="off"
              prefix-icon="el-icon-phone"
              placeholder="手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label prop="useraddress">
            <el-input
              type="text"
              v-model="registerForm.useraddress"
              autocomplete="off"
              prefix-icon="el-icon-s-home"
              placeholder="地址"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-radio v-model="registerForm.gender" label="男">男</el-radio>
            <el-radio v-model="registerForm.gender" label="女">女</el-radio>
          </el-form-item>
          <el-form-item>
            <!-- <el-button type="primary" plain>主要按钮</el-button> -->
            <el-button type="primary" round @click="submitForm('registerForm')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <!-- <el-link type="danger">危险链接</el-link> -->
           
            <el-link @click="toLogin"  type="danger">
           已有账号？去登录
              
              <i class="el-icon-right"></i>
            </el-link>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Register",
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.userpassword) {
        callback(new Error("两次输入密码不一致!"));
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
    var validateUserphone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } 
      else  if(!(/^1[3456789]\d{9}$/.test(value))) {
            callback(new Error('请输入手机号码'));
          }
      else {
        callback();
      }
    };
    var validateUseraddress = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入地址"));
      } else {
        callback();
      }
    };
   

    return {
      registerForm: {
        username: "",
        userpassword: "",
        checkPass: "",
        userphone: "",
        useraddress: "",
        gender: "男"
      },
      rules: {
        userpassword: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }],
        userphone: [{ validator: validateUserphone, trigger: "blur" }],
        useraddress: [{ validator: validateUseraddress, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("user/register", this.$qs.stringify(this.registerForm))
            .then(res => {
              if (res.data.status == 0) {
                this.$message({
                  message: "注册成功！",
                  type: "success"
                });
                _this.$router.push({ name: "Home" });
              } else {
                _this.$alert(res.data.msg, "", {
                  confirmButtonText: "确定",
                  callback: action => {
                    this.$router.go(0);
                    // _this.registerForm.resetFields()
                  }
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toLogin(){
        this.$router.push("/login");
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
<style  scoped>
img {
  position: absolute;
  right: 0;
  width: 100%;
  z-index: -100;
}

/* 布局 */
/* 标题颜色 */
h2 {
  color: rgb(255, 255, 255);
}
/* 输入和按钮 */
.el-input {
  border-radius: 10px;
}
.el-button {
  width: 20em;
}
/* 卡片 */
/* .text {
  font-size: 14px;
} */
/* .item {
  padding: 18px 0;
} */

.box-card {
  width: 100%;
  height: 600px;
  /* position: relative; */
  margin-top: 5em;
  /* margin:0 auto; */
  /* padding: 0 3em; */
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  border-style: none;
}
/* 表单 */
.el-form {
    width: 70%;
  margin:0 auto; 
  /* margin-right: 4em; */
  /* padding: 3em 0em; */
}

/* 单选框 */
</style>