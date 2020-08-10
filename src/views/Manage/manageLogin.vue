<template>
  <div class="managelogin">
    <el-row :gutter="20">
      <el-col :span="14" :offset="5">
        <el-card class="box-card">
          <el-col :span="24" class="img_log">
            <el-col :span="12" class="img_logo">
              <img alt="Vue logo" src="../../assets/manageLogin.png" />
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
                  <h3>管理员登陆</h3>           
                </el-form-item>

                <el-form-item label="" prop="adminId">
                  <el-input
                    type="text"
                    v-model="loginForm.adminId"
                    autocomplete="off"
                    prefix-icon="el-icon-coffee-cup"
                    placeholder="管理员账号"
                  ></el-input>
                </el-form-item>

                <el-form-item label="" prop="adminPw">
                  <el-input
                    type="password"
                    v-model="loginForm.adminPw"
                    autocomplete="off"
                    prefix-icon="el-icon-key"
                    placeholder="密码"
                    show-password
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('loginForm')" round>管理员登陆</el-button>                
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
.managelogin {
  background-color: rgba(255, 159, 204, 0.911);
  height: 30em;
}
/* 布局 */
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 6px;
}
/* 输入和按钮 */
.el-input {
  border-radius: 40px;
}
.el-button{
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
  margin-top: 1em;
}
.img_logo{
    margin-top: 0.5em;
} 
img{
   /*margin-left: -6em;
  margin-bottom: -3em; */
  margin-top: 0.6em;
  width: 77%;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "manageLogin"
};
</script>

<script>
export default {
    
  data() {
    
    var validateAdminId = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入管理员账号"));
      } 
      else {callback();}
    };
    var validateAdminPw = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } 
      else {callback();}
    };

    return {
      loginForm: {
        adminId: "",
        adminPw: "",
      },
      rules: {
        adminId: [{ validator: validateAdminId, trigger: "blur" }],
        adminPw: [{ validator: validateAdminPw, trigger: "blur" }],
    
      }
    };
  },
  methods: {
    submitForm(formName) {
      const_this=this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
          .post("manage/managelogin",this.$qs.stringify(this.loginForm))
          .this(res=>{
            if(res.data.status == 0){
              this.$message({
                message:"登陆成功",
                type:"success"
              });
              _this.$router.push({name:'manageHome'})
            }
            else{
              _this.$alert(res.data.msg,'',{
                confirmButtonText:'确定',
                callback:action=>{
                  this.$router.go(0)
                },
              })
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
    }
  }
};
</script>