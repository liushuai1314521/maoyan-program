import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Video from '../views/Video.vue'
import Svideo from '../views/Svideo.vue'
import Show from '../views/Show.vue'
import Move from '../views/Move.vue'
import Movielist from '../views/Movielist.vue'
import City from '../views/City.vue'
import comingSoon from '../views/comingSoon.vue'
import classicMovie from '../views/classicMovie.vue'
import movieDetail from '../views/movieDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/movie',
        name: 'Move',
        component: Move
      },
      {
        path: '/home',
        name: 'Movielist',
        component: Movielist
      },
      {
        path: '/comingsoon',
        name: 'comingSoon',
        component: comingSoon
      },
      {
        path: '/classic',
        name: 'classicMovie',
        component: classicMovie
      }
    ]
  },
  {
    path: '/moviedetail/:movieId',
    name: 'movieDetail',
    component: movieDetail,
    props: true
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/svideo',
    name: 'Svideo',
    component: Svideo
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/',
    redirect: '/home',
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
