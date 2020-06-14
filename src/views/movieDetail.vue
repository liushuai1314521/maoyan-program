<template>
  <div class="container">
    <div class="poster-img">
      <img v-if="show" class="imga" @click="handleBack" src="../assets/back.png" />
    </div>
    <transition name="fade">
      <div v-if="isshow" class="back">
        <img @click="handleBack" src="../assets/back.png" />
        <div class="ft">{{detailList.name}}</div>
      </div>
    </transition>

    <div class="title-poster">
      <img v-if="detailList.poster" class="poster" :src="detailList.poster" alt />
      <div v-else class="poster-null">
        <img class="null-img" src="../assets/null.png" alt />
      </div>
    </div>
    <div class="film-detail">
      <div ref="mid" style="overflow:hidden" class="middle">
        <div class="name_type">
          <div class="tit">
            <span class="title">{{detailList.name}}</span>
            <span v-if="detailList.item" class="movietype" v-html="detailList.item.name"></span>
          </div>
          <div class="score">
            <span class="num">{{detailList.grade}}</span>
            <span class="sco">分</span>
          </div>
        </div>
        <span class="nm">
          <span class="grade">{{detailList.category}}</span>
        </span>
        <span class="nm">{{detailList.premiereAt}}</span>
        <span v-if="detailList.nation" class="nm">{{detailList.nation}} | {{detailList.runtime}}分钟</span>
        <!-- <div class="direction">
          <span>{{detailList.synopsis}}</span>
        </div>-->
      </div>
      <!--  <div @click="handleDown" class="up-down">
        <img src="../assets/up_down.png" alt />
      </div>-->
      <div class="desc">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="影片介绍" name="1">{{detailList.synopsis}}</van-collapse-item>
        </van-collapse>
      </div>
      <div class="star">
        <Avatar v-if="detailList.actors" name="演职人员" plain>
          <van-swipe :show-indicators="false" :loop="false" :width="93">
            <van-swipe-item v-for="item in detailList.actors" :key="item.name">
              <div class="wrap">
                <div class="avat">
                  <img :src="item.avatarAddress" alt />
                  <div class="name">
                    <span class="first">{{item.name}}</span>
                    <span class="last">{{item.role}}</span>
                  </div>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </Avatar>
        <div class="noavatar" v-else>暂无演职人员</div>
      </div>
      <div class="detail-swiper">
        <Avatar v-if="detailList.photos" name="剧照" :tit="detailList.photos.length">
          <van-swipe :show-indicators="false" :loop="false" :width="160">
            <van-swipe-item
              class="swiper-item"
              v-for="(item,index) in detailList.photos"
              :key="index"
            >
              <div @click="showImg( item,index)" v-if="detailList.photos" class="wrap">
                <div class="avato">
                  <img :src="item" alt />
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </Avatar>
        <div class="noavatar" v-else>暂无电影剧照</div>
      </div>
    </div>
    <div class="tabbar">选座购票</div>
  </div>
</template>
<script>
import axios from "axios";
import BetterScroll from "better-scroll";
import Avatar from "../components/Avatar.vue";
import { ImagePreview } from "vant";
export default {
  props: ["movieId"],
  components: {
    Avatar,
    ImagePreview
  },
  data() {
    return {
      detailList: {},
      isshow: false,
      show: true,
      activeNames: ["1"],
      index: 1,
      show: false
    };
  },
  methods: {
    showImg(item, index) {
      ImagePreview({
        images: this.detailList.photos,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    },
    onChange(index) {
      this.index = index;
    },
    handleDown() {
      this.$refs.mid.style.height = auto;
      /*  this.$refs.mid.style.overflow = ; */
    },
    handleBack() {
      this.$router.back();
    },
    handleScroll() {
      /*       console.log(document.documentElement.scrollTop); */
      if (document.documentElement.scrollTop > 44) {
        this.isshow = true;
        this.show = false;
      } else {
        this.isshow = false;
        this.show = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.movieId}&k=6569404`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15899652494977867096221","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.info"
      }
    }).then(res => {
      if (res.data.msg == "ok") {
        this.detailList = res.data.data.film;
        // console.log(this.detailList);
      }
    });
  },
  created() {
    console.log(this.movieId);
  },
  beforeMount() {
    this.$store.commit("HideMaoyanTabbar", false);
  },
  beforeDestroy() {
    this.$store.commit("ShowMaoyanTabbar", true);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  /*   transform: translateY(0.25rem); */
}
.container {
  background-color: #f9f9f9;
}
.back {
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 17px;
  position: fixed;
  top: 0;
}
.back img {
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 99;
  margin-left: 5px;
}
.imga {
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 99;
  margin-left: 5px;
  margin-top: 5px;
  position: fixed;
}
.back .ft {
  margin: 0 auto;
}
.poster {
  width: 100%;
  max-height: 210px !important;
}
.film-detail {
  width: 100%;
  /*   height: 189px; */
  background-color: white;
}
.middle {
  padding-top: 13px;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  /*   background-color: red; */
  overflow: hidden;
}
.name_type {
  display: flex;
  align-items: center;
}
.title {
  font-family: PingFangSC-Regular, "Hiragino Sans GB", sans-serif;
  font-size: 18px;
  color: #191a1b;
  line-height: 24px;
}
.movietype {
  width: 21px;
  height: 14px;
  background: #d2d6dc;
  margin-left: 4px;
  border-radius: 2px;
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 14px;
}
.nm {
  font-family: PingFangSC-Regular, "Hiragino Sans GB", sans-serif;
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}
.grade {
  font-size: 14px;
}
.score {
  display: inline-block;
  color: #ffb232;
  position: absolute;
  right: 15px;
}
.score .num {
  font-size: 20px;
  font-style: italic;
  margin-right: 1px;
}
.score .sco {
  font-size: 12px;
  font-family: "Microsoft YaHei", Tahoma, Helvetica, Arial, sans-serif;
}
.tit {
  display: flex;
  align-items: center;
}
.direction span {
  margin-top: 15px;
  margin-right: 10px;
  display: block;
  font-size: 13px;
  color: #797d82;
  /*   padding: 10px; */
}
.tabbar {
  position: fixed;
  left: 0px;
  bottom: 0px;
  color: #fff;
  width: 100%;
  height: 49px;
  background-color: #ff5f16;
  font-size: 16px;
  text-align: center;
  line-height: 49px;
}
.up-down {
  display: block;
  margin: auto;
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 2px;
  background-color: black;
}
.up-down img {
  width: 20px;
  top: 5px;
}
.desc {
  margin-top: 10px;
  border-bottom: 12px solid #f4f4f4;
}
.avat {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 9px;
}
.avat .name {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px 0;
}
.avat .name .first {
  font-size: 12px;
  color: #191a1b;
}
.avat .name .last {
  font-size: 12px;
  color: #797d82;
}
.avat img {
  width: 83px;
  max-height: 115px;
  /*   height: 83px; */
  /*   min-height: 110px; */
}
.wrap {
  display: flex;
}
.noavatar {
  width: 100%;
  height: 140px;
  text-align: center;
  line-height: 140px;
  color: #bdc5d6;
  font-size: 13px;
}
.star {
  border-bottom: 12px solid #f4f4f4;
}
.detail-swiper {
  margin-bottom: 50px;
}
.avato img {
  width: 150px;
  height: 62.5px;
}
.avato {
  margin-left: 9px;
}
.swiper-item {
  margin-right: 0px;
}
.poster-null {
  width: 100%;
  height: 190px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
}
.null-img {
  width: 55px;
  height: 55px;
  /*   display: flex; */
  align-items: center;
  margin: 0 auto;
}
</style>