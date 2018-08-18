<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="home" style="margin-left:220px;">首页</el-menu-item>
          <el-menu-item index="informationManage">资讯管理</el-menu-item>
          <el-menu-item index="postingManage">帖子管理</el-menu-item>
          <el-menu-item index="userManage">用户管理</el-menu-item>
          <el-menu-item index="miniProgramManage">小程序管理</el-menu-item>
          <el-menu-item index="systemManage">系统管理</el-menu-item>
        </el-menu>
      </el-header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 'home'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
