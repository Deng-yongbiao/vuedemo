import Mock from "mockjs"
import homeApi from "./home"
//延时，模拟从后台获取数据时间 200-1000ms
Mock.setup({
  timeout: "200-600"
})

// 首页相关
// 拦截的是 "/home /getData"
Mock.mock(/\/home\/getData/, "get", homeApi.getStatisticalData)
