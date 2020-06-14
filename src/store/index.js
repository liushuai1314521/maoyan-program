import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        show: true,
        city: window.localStorage.getItem("currtcity"),
        name: window.localStorage.getItem("cityname") || "北京",
        cityId: window.localStorage.getItem("cityid") || 110100
    },
    mutations: {
        HideMaoyanTabbar(state, data) {
            state.show = data
        },
        ShowMaoyanTabbar(state, data) {
            state.show = data
        },
        CITY_INFO(state, palyod) {
            state.name = palyod.name;
            state.cityId = palyod.cityId
        }
    }

})

export default store