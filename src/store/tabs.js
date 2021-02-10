/* eslint-disable no-unused-vars */
export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tabsList: [
      {
        path: "/",
        label: "首页",
        icon: "s-home",
        name: "home"
      }
    ]
  },
  mutations: {
    selectMenu(state, val) {
      if (val.label !== "首页") {
        state.currentMenu = val
        let result = state.tabsList.findIndex(item => item.label == val.label)
        if (result === -1) state.tabsList.push(val)
      }
    },
    closeTab(state, val) {
      //首页必须存在
      if (val.label !== "首页") {
        let result = state.tabsList.findIndex(item => item.label === val.label)
        if (result !== -1) state.tabsList.splice(result, 1)
      }
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  action: {}
}
