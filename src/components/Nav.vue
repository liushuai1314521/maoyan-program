<template>
  <div>
    <div class="header-right">
      <div class="header-title">
        {{title}}
        <span>
          <strong>三</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true, default: "猫眼电影" }
  }
};
</script>

<style scoped>
.header-right {
  position: sticky;
  top: 0;
  background-color: #e54847;
  width: 100%;
  height: 50.5px;
  z-index: 99;
}
.header-title {
  text-align: center;
  font-size: 18px;
  color: white;
  line-height: 50px;
}
.header-title span {
  position: absolute;
  right: 15px;
}
</style>