<template>
  <el-row class="home" :guttter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height:290px">
        <div class="user">
          <el-avatar :size="150" :src="userImg"></el-avatar>
          <div class="userInfo">
            <p class="name">Nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2019年10月20号</span></p>
          <p>上次登录地点:<span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:522px;margin-top:20px">
        鼠标悬浮时显示
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: '0px' }">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height:280px"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <div style="height:260px"></div>
        </el-card>
        <el-card shadow="hover">
          <div style="height:260px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
      countData: [
        { name: "今日支付订单", value: 1234, icon: "success", color: "#2ec7c9" },
        { name: "今日收藏订单", value: 210, icon: "star-on", color: "#ffb980" },
        { name: "今日未支付订单", value: 1234, icon: "s-goods", color: "#5abe1f" },
        { name: "本月支付订单", value: 1234, icon: "success", color: "#2ec7c9" },
        { name: "本月收藏订单", value: 210, icon: "star-on", color: "#ffb980" },
        { name: "本月未支付订单", value: 1234, icon: "s-goods", color: "#5abe1f" }
      ]
    }
  },
  // mounted() {
  //   this.$http.get("/home/getData").then(res => {
  //     console.log(res.data)
  //   })
  // },
  methods: {
    getTabData() {
      this.$http.get("/home/getData").then(res => {
        console.log(res.data)
      })
    }
  },
  created() {
    this.getTabData()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/home.scss";
</style>
