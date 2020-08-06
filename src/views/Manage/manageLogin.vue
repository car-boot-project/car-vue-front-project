<template>
  <div class="managelogin">
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
                  <h3>管理员登陆</h3>           
                </el-form-item>

                <el-form-item label="" prop="managename">
                  <el-input
                    type="text"
                    v-model="ruleForm.managename"
                    autocomplete="off"
                    prefix-icon="el-icon-coffee-cup"
                    placeholder="管理员账号"
                  ></el-input>
                </el-form-item>

                <el-form-item label="" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    prefix-icon="el-icon-key"
                    placeholder="密码"
                    show-password
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')" round>管理员登陆</el-button>                
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
  background-color: rgba(248, 163, 202, 0.911);
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
  /* position: relative; */
  margin-top: 2em;
}
.img_logo{
    /* position: relative; */
    margin-top: 3em;
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
    var validateManagename = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入管理员账号"));
      } else {
        // if (this.ruleForm.checkPass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        managename: "",
       
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        managename: [{ validator: validateManagename, trigger: "blur" }],
    
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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