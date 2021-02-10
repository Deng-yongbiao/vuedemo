/* eslint-disable no-unused-vars */
<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in dynamicTags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      <!-- 这里不能写成this.$route，不然会报错，原因未知 -->
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { mapMutations } from "vuex"
export default {
  methods: {
    ...mapMutations({
      // 将 `this.handleClose(tag)` 映射为 `this.$store.commit('closeTab', tag)`
      handleClose: "closeTab"
    }),
    changeMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit("selectMenu", item)
    }
  },
  computed: {
    ...mapState({
      dynamicTags: function(state) {
        return state.tab.tabsList
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer; //指针手势
  }
}
</style>
