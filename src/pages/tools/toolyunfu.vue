<template>
  <div class="container">
    <scroller>
      <wxc-cell v-for="(i,index) in list" :key="index" class="flexcell" :class="[i.type==='title'?'istitle':'']">
        <text :class="[i.type==='title'?'istitle':'normal']" slot="title">{{i.title}}</text>
        <text :class="[i.type==='title'?'istitle':'normal']" slot="value">{{i.value}}</text>
      </wxc-cell>
    </scroller>
  </div>
</template>
<script>
import { WxcCell } from "weex-ui";
import { yunfudata } from "../../assets/data.js";
export default {
  data: () => ({
    list: yunfudata
  }),
  methods: {},
  components: { WxcCell }
};
</script>
<style scoped>
.flexcell {
  margin-top: 20px;
  padding-left: 100px;
  padding-right: 100px;
}
.istitle {
  background-color: #fefefe;
  font-size: 34px;
  font-weight: bold;
  color: #333333;
}
.normal {
  color: #888888;
}
</style>


