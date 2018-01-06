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
import { WxcIndexlist } from "weex-ui";
export default {
  data: () => ({}),
  methods: {},
  components: { WxcIndexlist }
};
</script>
<style scoped>
.container {
  width: 750px;
  align-items: center;
  background-color: #f8f8f8;
}
</style>