<template>
  <div class="btndiv">
    <wxc-button 
      text="清空"
      type="normal"
      :btnStyle="btnstyle"
      @wxcButtonClicked="cancelClick">
    </wxc-button>
    <wxc-button 
      text="计算"
      type="yellow"
      :btnStyle="btnstyle"
      @wxcButtonClicked="scoreClick">
    </wxc-button>
  </div>
</template>
<style scoped>
.btndiv {
  width: 750px;
  padding-left: 30px;
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
}
</style>
<script>
import { WxcButton } from "weex-ui";
export default {
  data() {
    return {
      btnstyle: {
        width: "330px"
      }
    };
  },
  methods: {
    cancelClick() {
      this.$emit("cancelClick");
    },
    scoreClick() {
      this.$emit("scoreClick");
    }
  },
  components: { WxcButton }
};
</script>

