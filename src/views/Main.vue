// 布局文件 有侧边栏、头部、还有中间的正文部分
<template>
  <el-container style="height:100%">
    <el-aside width="auto"><Common-Aside></Common-Aside></el-aside>
    <el-container>
      <el-header>
        <Common-Header></Common-Header>
      </el-header>
      <Common-Tab> </Common-Tab>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "../components/CommonHeader"
import CommonAside from "../components/CommonAside"
// eslint-disable-next-line no-unused-vars
import CommonTab from "../components/CommonTab"
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
