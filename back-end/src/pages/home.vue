<template>
  <div class="home_container">
    <el-aside width="220px">
      <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
      >
        <el-submenu index="home">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>数据统计</span>
          </template>
          <el-menu-item index="dataTotal">统计图</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item index="goodsList">商品列表</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item index="orderList">订单列表</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>测试3</span>
          </template>
          <el-menu-item index="dataTotal">测试33</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.home_container{
  padding: 0 20px;
}
</style>
