<template>
<div class="manageuser">
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="500">
    
    <el-table-column
      prop="name"
      label="姓名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="accountnumber"
      prefix-icon="el-icon-notebook-1"
      label="账号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="password"
      prefix-icon="el-icon-key"
      label="密码"
      width="150">
    </el-table-column>
    <el-table-column
      prop="phone"
      prefix-icon="el-icon-phone"
      label="联系方式"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      icon="el-icon-house"
      label="地址"
      width="400">
    </el-table-column>
    <el-table-column
     fixed="right"
     prefix-icon="el-icon-mouse"
      label="操作"
      width="180">
        <el-button icon="el-icon-delete">删除用户信息</el-button>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          name: '岳小莎',
          accountnumber: '123456',
          password: '123456',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '13386861111'
          
        }, {
          name: '王小飞',
          accountnumber: '123456',
          password: '123456',
          address: '宜昌市西陵区大学路八号',
          phone: '13386862222'
        }, {
          name: '张小薇',
          accountnumber: '123456',
          password: '123456',
          address: '北京市朝阳区三里屯路19号',
          phone: '13386863333'
        }, {
          name: '宋小卓',
          accountnumber: '123456',
          password: '123456',
          address: '天津市南开区复康路55号',
          phone: '13386864444'
        }, {
          name: '张小朋',
          accountnumber: '123456',
          password: '123456',
          address: '青岛市城阳区正阳路30号',
          phone: '13386865555'
        }, 
        {
          name: '仙女刘',
          accountnumber: '123456',
          password: '123456',
          address: '杭州市余杭区人民大道1556号',
          phone: '13386866666'
        },
        {name: '岳小莎',
          accountnumber: '123456',
          password: '123456',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '13386861111'
          },
          {
          name: '宋小卓',
          accountnumber: '123456',
          password: '123456',
          address: '天津市南开区复康路55号',
          phone: '13386864444'
        }, 
        {
          name: '张小朋',
          accountnumber: '123456',
          password: '123456',
          address: '青岛市城阳区正阳路30号',
          phone: '13386865555'
        }, 
        {
          name: '仙女刘',
          accountnumber: '123456',
          password: '123456',
          address: '杭州市余杭区人民大道1556号',
          phone: '13386866666'
        }]
      }
    }
  }
</script>

<style scoped>

.el-table-column{
  margin-bottom: 20px;

}
</style>
