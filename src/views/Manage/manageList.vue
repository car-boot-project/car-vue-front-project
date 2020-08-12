 <template>
  <div class="managelist">
   
   
        <!-- <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#FE929F"
          text-color="#000"
          active-text-color="#000"
        >
      
          <el-menu-item index="1" width="100%" text-align="center">我的管理中心</el-menu-item>
        </el-menu> -->
        <!-- <div>
          <h3 >我的管理中心</h3>
        </div> -->

  <div>
    <el-row class="manarow">
      <el-col :span="24" >
        <div class="grid-content bg-purple-dark">
          <h2>
            我的管理中心<i class="fa fa-clipboard" aria-hidden="true"></i>
          </h2>
          </div>
      </el-col>
    </el-row>
    <!-- 二等分 -->
    <el-row class="manacol">
    <el-col :span="12" >
      <div>
        <el-menu>
          <el-menu-item index="4">
              <router-link to="/manageuser">前往用户管理中心</router-link>
            </el-menu-item>
          </el-menu>
          </div>
    </el-col>
    <el-col :span="12">
      <div >
        <el-menu >
          <el-menu-item index="5">
              <router-link to="/managecar">前往汽车管理中心</router-link>
            </el-menu-item>
          </el-menu>
      </div>
    </el-col>
    </el-row>
  </div>
  </div>
   
      
</template>

<script>
export default {
  name: "managelist",
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style>
.manarow{
  background-color: rgb(84, 218, 44);
  height: 100px;
  text-align: center;
}

.manacol{
  height: 583px;
  background-color: rgb(246, 255, 196);
}


</style>