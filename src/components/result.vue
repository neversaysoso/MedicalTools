<template>
  <div class="result">
    <title-bar :title="title"></title-bar>
    <wxc-cell 
      v-for="(i,index) in result"
      :key="index"
      :title="i.label">
      <text>{{i.value}}</text>
    </wxc-cell>
  </div>
</template>
<style scoped>
.result {
  margin-bottom: 30px;
}
</style>
<script>
import { WxcCell } from "weex-ui";
import TitleBar from "./titlebar.vue";
export default {
  props: {
    title: {
      type: String,
      default: "结果"
    },
    result: {
      type: Array
    }
  },
  components: { WxcCell, TitleBar }
};
</script>



