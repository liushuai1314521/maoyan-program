<template>
  <div class="content" :style="mystyle">
    <div>
      <div class="loading" v-if="isShow">
        <van-loading size="60px" type="spinner" />
      </div>
      <div class="container" v-for="item in cinemaList" :key="item.cinemaId">
        <div class="address">
          <span class="name">{{item.name}}</span>
          <span class="detail">{{item.address}}</span>
          <!--     <div class="price">
          <span class="mark">¥</span>
          <span class="sellprice">42</span>
          <span class="lastprice">起</span>
          </div>-->
          <div class="distance">{{item.distance}}</div>
          <div class="vipcenter">
            <div class="up">
              <span class="back">退</span>
              <span class="gq">改签</span>
            </div>
            <span class="viptag">折扣卡</span>
          </div>
          <div class="count">
            <img class="concolor" src="../assets/card.png" />
            <span class="discount">开卡特惠, 首单2张最高立减6元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      isShow: true,
      cinemaList: [],
      prevCityId: -1,
      mystyle: {
        height: "0px"
      }
    };
  },
  activated() {
    // console.log(document.documentElement.clientHeight);
    this.mystyle.height = document.documentElement.clientHeight + "px";

    const _id =
      window.localStorage.getItem("cityid") || this.$store.state.cityId;
    // var cityId = this.$store.state.cityId;
    if (this.prevCityId == _id) {
      return;
    }
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${_id}&ticketFlag=1&k=6461781`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15899652494977867096221","bc":"310100"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res => {
      this.cinemaList = res.data.data.cinemas;
      this.isShow = false;
      this.prevCityId = _id;
      this.$nextTick(() => {
        new BetterScroll(".content", {
          scrollbar: {
            fade: true,
            interactive: false
          }
        });
      });
    });
  }
};
</script>

<style scoped>
.content {
  overflow: hidden;
  position: relative;
}
.vipcenter {
  display: flex;
  font-size: 12px;
  align-items: center;
  margin-top: 3px;
}
.up {
  color: #589daf;
  margin-right: 6px;
}
.back {
  border: 1px solid #589daf;
  margin-right: 6px;
}
.gq {
  border: 1px solid #589daf;
}
.viptag {
  color: #ff9900;
  border: 1px solid #ff9900;
}
.address {
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-top: 15px;
}
.name {
  font-size: 15px;
}
.detail {
  font-size: 13px;
  color: #666666;
  margin-top: 8px;
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.discount {
  font-size: 12px;
  color: #999999;
  font-family: PingFangSC-Regular, "Hiragino Sans GB", sans-serif;
}
.concolor {
  width: 15px;
  height: 14px;
}
.count {
  display: flex;
  align-items: center;
  margin-top: 7px;
}
.distance {
  font-size: 13px;
  color: #666666;
  font-family: PingFangSC-Regular, "Hiragino Sans GB", sans-serif;
  position: absolute;
  right: 25px;
  margin-top: 30px;
}
.price {
  font-family: "Microsoft YaHei", Tahoma, Helvetica, Arial, sans-serif;
  color: #666666;
  font-family: PingFangSC-Regular, "Hiragino Sans GB", sans-serif;
  position: absolute;
  right: 25px;
  color: red;
}
.sellprice {
  font-size: 15px;
}
.mark {
  font-size: 12px;
}
.lastprice {
  font-size: 12px;
}
.container {
  /*  display: flex; */
  align-items: center;
}
.content {
  margin-bottom: 60px;
}
.loading {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30px, -30px);
}
</style>