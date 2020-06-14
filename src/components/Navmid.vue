<template>
  <div>
    <div>
      <div class="app">
        <div class="image">
          <img
            style="width:44px;height:44px"
            src="../assets/maoyan.png"
            alt
          />
        </div>
        <div class="app-title">
          <span class="tit1">猫眼</span>
          <span class="tit2">在线选座,热门电影,爱上看电影</span>
        </div>
        <div class="btn">立即打开</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

.app-title {
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.btn {
  background-color: #ef4238;
  font-size: 13px;
  color: white;
  width: 68px;
  height: 30px;
  border-radius: 2px;
  text-align: center;
  line-height: 30px;
  right: 15px;
  position: absolute;
}
.tit1 {
  margin-bottom: 1px;
}
.tit2 {
  font-size: 12px;
  color: #999999;
}
.image {
  margin-left: 15px;
}
.app {
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  background-color: white;
}
.header-title span {
  position: absolute;
  right: 15px;
}
</style>