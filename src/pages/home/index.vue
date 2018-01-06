<template>
  <div class="container">
    <wxc-indexlist :normal-list="list"
      :show-index="showIndex"
      @wxcIndexlistItemClicked="indexClick">
    </wxc-indexlist>
  </div>
</template>
<script>
const modal = weex.requireModule("modal");
import { datalist } from "../../assets/data.js";
import { WxcIndexlist } from "weex-ui";
export default {
  data: () => ({
    list: datalist,
    showIndex: true
  }),
  methods: {
    indexClick(e) {
      if (!e.item.path) {
        modal.toast({ message: "功能建设中...", duration: 1 });
      } else {
        this.$router.push(`/${e.item.path}`);
      }
    }
  },
  components: { WxcIndexlist }
};
</script>