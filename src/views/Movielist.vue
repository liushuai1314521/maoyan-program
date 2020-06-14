<template>
  <div class="header">
    <div class="content">
      <div class="loading" v-if="isShow">
        <van-loading size="60px" type="spinner" />
      </div>
      <div @click="handleId(item.filmId)" class="home" v-for="item in movieList" :key="item.id">
        <div class="leftimg">
          <!-- <img :src="item.img | setWH('128.180')" alt />-->
          <img :src="item.poster" alt />
        </div>
        <div class="mid">
          <div class="middle">
            <div class="name_type">
              <span class="title">{{item.name}}</span>
              <span class="movietype" v-html="movieType"></span>
            </div>
            <span class="nm">
              观众评分:
              <span class="grade">{{item.grade}}</span>
            </span>
            <span class="nm">主演:{{item.director}}</span>
            <span class="nm">{{item.nation}} | {{item.runtime}}分钟</span>
          </div>
          <div class="score">
            <span>购票</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isShow: true,
      prevCityId: -1,
      movieType: ""
    };
  },
  methods: {
    handleId(item) {
      this.$router.push("/moviedetail/" + item);
    }
  },
  activated() {
    const _id =
      window.localStorage.getItem("cityid") || this.$store.state.cityId;
    // var cityId = this.$store.state.cityId;
    if (this.prevCityId === _id) {
      return;
    } else {
      this.isShow = true;
      axios({
        url: `https://m.maizuo.com/gateway?cityId=${_id}&pageNum=1&pageSize=10&type=1&k=1011185`,
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15899652494977867096221","bc":"410100"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then(res => {
        this.movieList = res.data.data.films;
        this.isShow = false;
        this.prevCityId = _id;
        this.movieType = res.data.data.films[0].filmType.name;
        // console.log(res.data.data.films[0].filmId);
      });
    }
  }
};
</script>

<style scoped>
.content {
  margin-bottom: 50px;
}
.name_type {
  display: flex;
  align-items: center;
}
.loading {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30px, -30px);
}
.leftimg img {
  width: 66px;
  height: 94px;
  padding-top: 13px;
  padding-left: 17px;
}
.middle {
  padding-top: 13px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
.home {
  display: flex;
}
.title {
  font-family: PingFangSC-Regular, "Hiragino Sans GB", sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: rgb(51, 51, 51);
  line-height: 24px;
}
.movietype {
  width: 21px;
  height: 14px;
  background: #d2d6dc;
  margin-left: 3px;
  border-radius: 2px;
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 14px;
}
.nm {
  font-family: PingFangSC-Regular, "Hiragino Sans GB", sans-serif;
  font-size: 13px;
  line-height: 23px;
  color: rgb(102, 102, 102);
}
.sco {
  color: orange;
  margin-right: 3px;
  font-size: 15px;
}
.tit {
  font-size: 8px;
  color: #666;
}
.score {
  width: 50px;
  height: 25px;
  background-color: red;
  position: absolute;
  right: 30px;
  margin-top: 45px;
  color: white;
  border-radius: 3px;
}
.score span {
  font-size: 15px;
  display: block;
  text-align: center;
  line-height: 25px;
}
.mid {
  display: flex;
  justify-content: space-between;
}
.grade {
  color: #ffb232;
  font-size: 14px;
}
</style>