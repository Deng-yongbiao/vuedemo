<template>
  <el-menu
    :router="isRouter"
    default-active
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    collapse-transition
  >
    <el-menu-item :route="item.path" :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.label" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState } from "vuex"
export default {
  //通过一个js数组的过滤方法，计算出有孩子的item和没有孩子的item
  computed: {
    noChildren() {
      return this.asideMenu.filter(function(item) {
        return !item.children
      })
    },
    hasChildren() {
      return this.asideMenu.filter(function(item) {
        return item.children
      })
    },
    ...mapState({
      isCollapse: function(state) {
        return state.tab.isCollapse
      }
    })
  },
  data() {
    return {
      isRouter: false, //这里其实对应的是element-ui里面的自动路由，如果为true的话，下面的click函数就不用写路由跳转了
      asideMenu: [
        {
          //增加路由属性跳转
          path: "/",
          label: "首页",
          //完整的图标有“el-icon-home”这里做一个拼接
          icon: "s-home",
          name: "home"
        },
        {
          path: "/video",
          label: "视频管理",
          icon: "video-play",
          name: "video"
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "user",
          name: "user"
        },
        //定义一个有二级菜单的条目，肯定没有路由，不需要跳转
        {
          label: "其它",
          icon: "setting",
          children: [
            {
              path: "/page1",
              label: "页面一",
              name: "page1"
            },
            {
              path: "/page2",
              label: "页面二",
              name: "page2"
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickMenu(item) {
      //跳转路由 函数式编程,其实也可以直接使用element-ui里面的属性
      console.log("currentRoute", this.$route)
      var currentRouter = this.$route.name
      if (currentRouter !== item.name) {
        this.$router.push({ name: item.name })
      }
      this.$store.commit("selectMenu", item)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>
