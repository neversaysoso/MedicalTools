<template>
  <div class="flexbox">
    <div class="flexitem" v-for="i in demolist" @click="gorouter">
      <div :class="[i.type===1?'type1':'',i.type===2?'type2':'',i.type===3?'type3':'',i.type===4?'type4':'','typebox']"></div>
      <text class="count">{{i.count}}</text>
      <text class="name">{{i.name}}</text>
      <text class="sexage">{{`${i.sex==1?'男':'女'}`}} {{i.age}}岁</text>
      <text :class="['righttips',i.isdamge?'isdamge':'']">{{`${i.isdamge?'重':'一般'}`}}</text>
      <div class="itembottom">
        <div class="labelbox">
          <text class="label">住院号</text>
          <text class="value">{{i.number}}</text>
        </div>
        <div class="labelbox">
          <text class="label">费别</text>
          <text class="value">{{`${i.payway==1?'自费':'市医保'}`}}</text>
        </div>
        <div class="labelbox">
          <text class="label">余额</text>
          <text class="value">{{i.pay}}</text>
        </div>
        <div class="labelbox">
          <text class="label">医生</text>
          <text class="value">{{i.doc}}</text>
        </div>
        <div class="labelbox">
          <text class="label">护士</text>
          <text class="value">{{i.hushi}}</text>
        </div>
        <text class="day">入院第{{i.day}}天</text>
        <div class="iscritical">
          <text class="critical" v-if="i.critical==true">危急</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      demolist: []
    };
  },
  mounted() {},
  methods: {
    gorouter() {}
  },
  props: ["demolist"]
};
</script>
<style scoped>
.flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 50px;
}
.flexitem {
  width: 300px;
  margin-left: 50px;
  margin-top: 50px;
  background-color: #fff;
  position: relative;
  padding-bottom: 10px;
}
.typebox {
  position: absolute;
  left: 0px;
  top: 20px;
  height: 80px;
  width: 8px;
}
.type1 {
  background-color: rgb(250, 50, 50);
}
.type2 {
  background-color: rgb(50, 250, 50);
}
.type3 {
  background-color: rgb(50, 50, 250);
}
.type4 {
  background-color: rgb(150, 50, 250);
}
.count {
  position: absolute;
  left: 15px;
  top: 35px;
  font-size: 40px;
  width: 80px;
  text-align: center;
}
.name {
  position: absolute;
  left: 100px;
  top: 24px;
  font-size: 30px;
}
.sexage {
  position: absolute;
  left: 100px;
  top: 68px;
  font-size: 24px;
  color: #888;
}
.righttips {
  position: absolute;
  right: 15px;
  top: 66px;
  color: #888;
  border-style: solid;
  border-color: #888;
  border-width: 1px;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  width: 70px;
  text-align: center;
}
.isdamge {
  background-color: #ffaf1c;
  color: #fff;
  border-color: #ffaf1c;
}

.itembottom {
  border-top-color: #e3e3e3;
  border-top-width: 1px;
  border-top-style: solid;
  position: relative;
  top: 0px;
  left: 10px;
  width: 280px;
  position: relative;
  padding-top: 10px;
  margin-top: 120px;
}
.labelbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
.label {
  color: #999;
  font-size: 26px;
}
.value {
  color: #333;
  font-size: 26px;
}
.day {
  color: #333;
  font-size: 26px;
  margin-top: 20px;
  padding-left: 10px;
}
.iscritical {
  border-top-color: #e3e3e3;
  border-top-width: 1px;
  border-top-style: solid;
  width: 280px;
  height: 60px;
  padding-top: 10px;
  margin-top: 10px;
}
.critical {
  background-color: rgb(250, 50, 50);
  color: #fff;
  text-align: center;
  width: 280px;
  font-size: 28px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 28px;
}
</style>


