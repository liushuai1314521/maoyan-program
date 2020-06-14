<template>
  <div class="nav">
    <div class="nav-item">
      <span>{{name}}</span>
      <span v-if="!plain" class="tit">全部({{tit}})></span>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
    tit: { type: Number },
    plain: { type: Boolean }
  }
};
</script>
<style scoped>
.nav-item {
  /*   width: 100%; */
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
.tit {
  font-size: 13px;
  color: #797d82;
}
</style>