<template>
  <div>
    <div class="navbar">
      <Nav title="猫眼电影"></Nav>
      <Navmid v-show="isshow"></Navmid>
      <Navsub></Navsub>
    </div>

    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view ref="movelist"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Navsub from "../components/Navsub";
import Navmid from "../components/Navmid";
import { Dialog } from "vant";
export default {
  data() {
    return {
      isshow: true
    };
  },
  components: {
    Dialog
  },
  created() {
    // this.axios.get("/api/getLocation").then(res => {
    //   if (this.$store.state.city === this.city) {
    //     return;
    //   } else {
    //     Dialog.confirm({
    //       title: "定位",
    //       message: res.data.data.nm
    //     })
    //       .then(() => {
    //         // on confirm
    //         window.localStorage.setItem("currtcity", res.data.data.nm);
    //         this.city = res.data.data.nm;
    //       })
    //       .catch(() => {
    //         // on cancel
    //       });
    //   }
    // });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      // console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop > 100) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  components: {
    Nav,
    Navsub,
    Navmid
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
.navbar {
  position: sticky;
  top: 0;
  z-index: 99;
}
</style>