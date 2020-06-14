<template>
  <div>
    <ul class="item">
      <router-link tag="li" to="/city" activeClass="active" class="city">
        {{$store.state.name}}
        <i class="icon-down iconfont icon-fanhuishangyizhang"></i>
      </router-link>
      <router-link tag="li" to="/home" activeClass="active">热映</router-link>
      <router-link tag="li" to="/movie" activeClass="active">影院</router-link>
      <router-link tag="li" to="/comingsoon" activeClass="active">待映</router-link>
      <router-link tag="li" to="/classic" activeClass="active">经典电影</router-link>
      <router-link tag="li" to="/search" activeClass="active">
        <van-icon class="icon-search" name="search" />
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  // props: {
  //   title :String,
  // }
};
</script>

<style scoped>
.active {
  color: red;
  border-bottom: 2px solid red;
  font-size: 17px;
}
.item {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
  color: #666666;
  font-weight: 700;
  background-color: #fff;
  z-index: 99;
}
.city {
  font-weight: normal;
  margin-left: 0px;
}
.item .icon-down {
  font-size: 10px;
  display: inline-block;
  transform: rotate(-90deg);
}
.item .icon-search {
  color: red;
  font-size: 22px;
}
</style>