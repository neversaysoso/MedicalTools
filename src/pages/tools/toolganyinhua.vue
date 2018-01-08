<template>
  <scroller>
    <div v-for="(i,index) in list" :key="index">
      <title-bar :title="i.title"></title-bar>
      <wxc-radio
        ref="radio"
        :list="i.options">
      </wxc-radio>
    </div>
    <btn-box
      @cancelClick="cancelClick"
      @scoreClick="scoreClick">
    </btn-box>
    <Result
      :result="result">
    </Result>
  </scroller>
</template>
<script>
const modal = weex.requireModule("modal");
import { WxcRadio } from "weex-ui";
import TitleBar from "../../components/titlebar.vue";
import BtnBox from "../../components/btnbox.vue";
import Result from "../../components/result.vue";
import { ganyinhuadata } from "../../assets/data.js";

export default {
  data() {
    return {
      list: ganyinhuadata,
      score: "",
      result: [
        {
          label: "评分",
          value: this.score
        }
      ]
    };
  },
  watch: {
    score(d) {
      this.result[0].value = d;
    }
  },
  methods: {
    cancelClick() {
      for (let i of this.$refs.radio) {
        i.checkedIndex = -1;
      }
      this.score = "";
    },
    scoreClick() {
      let ok = true;
      let num = 0;
      for (let i of this.$refs.radio) {
        if (i.checkedIndex === -1) {
          ok = false;
          break;
        } else {
          num += i.checkedIndex + 1;
        }
      }
      if (!ok) {
        modal.toast({ message: "请完成答题后计算", duration: 1 });
      } else {
        this.score = num;
      }
    }
  },
  components: { WxcRadio, TitleBar, Result, BtnBox }
};
</script>

