<template>
  <text class="titlebar">{{title}}</text>
</template>
<style scoped>
.titlebar {
  height: 100px;
  line-height: 100px;
  padding-left: 30px;
}
</style>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>



