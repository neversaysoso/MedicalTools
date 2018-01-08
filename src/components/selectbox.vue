<template>
  <div class="selectbox">
    <template v-for="(i,index) in options">
      <wxc-icon name="success" :style="index===config.index?activeStyle:baseStyle" >
      </wxc-icon>
      <text class="selectext" @click="selectClick(index)">{{i.title}}</text>
    </template>
  </div>
</template>
<style scoped>
.selectbox {
  flex-direction: row;
}
.selectext {
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
}
</style>
<script>
import { WxcIcon } from "weex-ui";
export default {
  props: {
    options: {
      type: Array
    },
    config: {
      default: {
        index: -1
      }
    }
  },
  data() {
    return {
      baseStyle: {
        fontSize: "40px",
        marginLeft: "20px",
        color: "#999999"
      },
      activeStyle: {
        fontSize: "40px",
        marginLeft: "20px",
        color: "#ffc900"
      }
    };
  },
  methods: {
    selectClick(i) {
      this.config.index = i;
    }
  },
  components: { WxcIcon }
};
</script>