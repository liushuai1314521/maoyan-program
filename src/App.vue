<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <div class="menu" v-show="$store.state.show">
      <router-link to="/home" tag="li" activeClass="myactive" class="ico">
        <i class="iconfont icon-video"></i>电影/影院
      </router-link>
      <router-link to="/video" tag="li" activeClass="myactive" class="ico">
        <i class="iconfont icon-menu"></i>视频
      </router-link>
      <router-link to="/svideo" tag="li" activeClass="myactive" class="ico">
        <i class="iconfont icon-menu1"></i>小视频
      </router-link>
      <router-link to="/show" tag="li" activeClass="myactive" class="ico">
        <i class="iconfont icon-fanhuishangyizhang"></i>演出
      </router-link>
      <router-link to="/mine" tag="li" activeClass="myactive" class="ico">
        <i class="iconfont icon-Artifact-yingxiong"></i>我的
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: true
    };
  }
  // watch: {
  //   "$route.path": function(val) {
  //     if (val === "/city") {
  //       this.show = false;
  //     } else {
  //       this.show = true;
  //     }
  //   }
  // },
  // beforeMount() {
  //   if (this.$route.path === "/city") {
  //     this.show = false;
  //   } else {
  //     this.show = true;
  //   }
  // }
};
</script>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
} */
.myactive {
  color: #e54847;
}
.menu {
  /* position: absolute; */
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: #fff;
  white-space: nowrap;
  margin: 0;
  padding: 3px 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgb(230, 230, 230);
}
.menu .ico {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  /* margin-bottom: 0; */
}
.menu .ico i {
  font-size: 25px;
}
</style>
