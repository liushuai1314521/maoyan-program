<template>
  <div class="bg">
    <div class="loading" v-if="isShow">
      <van-loading size="60px" type="spinner" />
    </div>
    <div class="nav">
      <i @click="$router.go(-1)" class="back iconfont icon-fanhuishangyizhang"></i>
      <span class="curcity">当前城市 -</span>
    </div>
    <div>
      <mt-search class="search" v-model="value" cancel-text="取消" placeholder="请输入城市名称或拼音"></mt-search>
    </div>
    <!-- <div class="location">
      <div class="text">定位</div>
    </div>
    <div class="hotcity">热门城市</div>
    <div class="hotlist">
      <span class="item" v-for="hot in hotcenter" :key="hot.cityId">{{hot.name}}</span>
    </div>-->
    <mt-index-list ref="mylist">
      <div class="currentcity">当前定位</div>
      <div class="location">
        <div @click="handlecity" ref="dingwei" class="text">{{$store.state.name}}</div>
      </div>
      <div class="hotcity">热门城市</div>
      <div class="hotlist">
        <div
          class="item"
          v-for="hot in hotcenter"
          :key="hot.cityId"
          @click="toCity(hot.name,hot.cityId)"
        >{{hot.name}}</div>
      </div>
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <div @click="toCity(city.name,city.cityId)" v-for="city in data.list" :key="city.cityId">
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      isShow: true,
      value: "",
      datalist: [],
      hotcenter: [],
      curLocation: ""
    };
  },
  beforeMount() {
    this.$store.commit("HideMaoyanTabbar", false);
  },
  mounted() {
    this.$refs.mylist.$el.style.height =
      document.documentElement.clientHeight - 100 + "px";
    var cityList = window.localStorage.getItem("cityList");
    var hotList = window.localStorage.getItem("hotList");
    if (cityList && hotList) {
      this.datalist = JSON.parse(cityList);
      this.hotcenter = JSON.parse(hotList);
    } else {
      axios({
        url: "https://m.maizuo.com/gateway?k=4210675",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15899652494977867096221"}',
          "X-Host": "mall.film-ticket.city.list"
        }
      }).then(res => {
        this.datalist = this.handleCity(res.data.data.cities);
        this.isShow = false;
        console.log(this.datalist);
        console.log(this.hotcenter);
        window.localStorage.setItem("cityList", JSON.stringify(this.datalist));
        window.localStorage.setItem("hotList", JSON.stringify(this.hotcenter));
      });
    }
  },

  methods: {
    toCity(name, id) {
      this.$store.commit("CITY_INFO", { name, id });
      window.localStorage.setItem("cityname", name);
      window.localStorage.setItem("cityid", id);
      this.$router.push("/home");
    },
    handlecity() {
      this.$refs.dingwei.innerText = "定位中...";
      setTimeout(() => {
        this.$refs.dingwei.innerText = this.$store.state.name;
      }, 2000);
    },
    //城市列表处理
    handleCity(datalist) {
      // console.log(datalist);
      var letterArr = [];
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      // console.log(letterArr)
      var datalists = [];
      var newlist = [];
      var hotcities = [];
      for (var n = 0; n < datalist.length; n++) {
        if (datalist[n].isHot === 1) {
          hotcities.push(datalist[n]);
        }
      }
      this.hotcenter = hotcities;
      // console.log(hotcities);
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(
          item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        );
        // console.log(arr)
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr
          });
        }
      }
      // console.log(newlist);
      // console.log(hotcities);
      return newlist;
    }
  },
  beforeDestroy() {
    this.$store.commit("ShowMaoyanTabbar", true);
  }
};
</script>

<style scoped>
.bg {
  background-color: #ffffff;
  /*  height: 100%; */
}
.nav {
  display: flex;
  width: 100%;
  height: 44px;
  font-size: 17px;
  text-align: center;
  align-items: center;
}
.back {
  margin-left: 5px;
}
.curcity {
  margin: 0 auto;
  color: #191a1b;
}
.search {
  height: 100%;
}
.hotcity {
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 12px;
}
.currentcity {
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 12px;
}
.location {
  width: 87px;
  height: 30px;
  background-color: #f4f4f4;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  margin-left: 14px;
  margin-bottom: 12px;
}
.hotlist {
  /* float: left; */
  /* width: 100%; */
  background-color: #fff;
  /* justify-content: space-around; */
  display: flex;

     flex-wrap: wrap;
            margin-left: 20px;
}
.item {
  /* display: flex; */
  /* display: inline-block; */
  width: 87px;
  height: 30px;
  background-color: #f4f4f4;
  /* margin-right: 15px; */
  margin-bottom: 13px;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  /* margin-left: 15px; */
  /* justify-content: space-between; */
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