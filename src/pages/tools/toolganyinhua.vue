<template>
  <div class="fulldiv">
    <scroller>
      <div v-for="(i,index) in list" :key="index">
        <item-title :title="i.title"></item-title>
        <wxc-radio
          ref="radio"
          :list="i.options"
          @wxcRadioListChecked="radioListChecked">
        </wxc-radio>
      </div>
      <div class="btndiv">
        <wxc-button 
          text="清空"
          type="normal"
          :btnStyle="btnstyle"
          @wxcButtonClicked="qkClick">
        </wxc-button>
        <wxc-button 
          text="计算"
          type="yellow"
          :btnStyle="btnstyle">
        </wxc-button>
      </div>
    </scroller>
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
import { WxcButton, WxcRadio } from "weex-ui";
import ItemTitle from "../../components/itemtitlebar.vue";
import { ganyinhuadata } from "../../assets/data.js";
export default {
  data: () => ({
    list: ganyinhuadata,
    btnstyle: {
      width: "330px"
    }
  }),
  methods: {
    radioListChecked(e) {},
    qkClick() {
      this.$refs.radio[4].list[0].checked = false;
      setTimeout(() => {
        this.list = ganyinhuadata;
      }, 100);
    }
  },
  components: { WxcButton, WxcRadio, ItemTitle }
};
</script>

