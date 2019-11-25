import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _402325de = () => interopDefault(import('..\\pages\\acticle.vue' /* webpackChunkName: "pages_acticle" */))
const _6c4da9ca = () => interopDefault(import('..\\pages\\chart.vue' /* webpackChunkName: "pages_chart" */))
const _913fc6d2 = () => interopDefault(import('..\\pages\\mine.vue' /* webpackChunkName: "pages_mine" */))
const _0e792fe2 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages_user" */))
const _db799eac = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _9d1dadf6 = () => interopDefault(import('..\\pages\\user\\regist.vue' /* webpackChunkName: "pages_user_regist" */))
const _8b8b7d6a = () => interopDefault(import('..\\pages\\write.vue' /* webpackChunkName: "pages_write" */))
const _69e05668 = () => interopDefault(import('..\\pages\\acticleDetail\\_id.vue' /* webpackChunkName: "pages_acticleDetail__id" */))
const _49a19ca6 = () => interopDefault(import('..\\pages\\cssnote\\_pages.vue' /* webpackChunkName: "pages_cssnote__pages" */))
const _e0a1297c = () => interopDefault(import('..\\pages\\learningway\\_pages.vue' /* webpackChunkName: "pages_learningway__pages" */))
const _30506b06 = () => interopDefault(import('..\\pages\\nodenote\\_pages.vue' /* webpackChunkName: "pages_nodenote__pages" */))
const _44293e84 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _7260ee83 = () => interopDefault(import('..\\pages\\index\\_pages.vue' /* webpackChunkName: "pages_index__pages" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acticle",
    component: _402325de,
    name: "acticle"
  }, {
    path: "/chart",
    component: _6c4da9ca,
    name: "chart"
  }, {
    path: "/mine",
    component: _913fc6d2,
    name: "mine"
  }, {
    path: "/user",
    component: _0e792fe2,
    name: "user",
    children: [{
      path: "login",
      component: _db799eac,
      name: "user-login"
    }, {
      path: "regist",
      component: _9d1dadf6,
      name: "user-regist"
    }]
  }, {
    path: "/write",
    component: _8b8b7d6a,
    name: "write"
  }, {
    path: "/acticleDetail/:id?",
    component: _69e05668,
    name: "acticleDetail-id"
  }, {
    path: "/cssnote/:pages?",
    component: _49a19ca6,
    name: "cssnote-pages"
  }, {
    path: "/learningway/:pages?",
    component: _e0a1297c,
    name: "learningway-pages"
  }, {
    path: "/nodenote/:pages?",
    component: _30506b06,
    name: "nodenote-pages"
  }, {
    path: "/",
    component: _44293e84,
    name: "index",
    children: [{
      path: ":pages?",
      component: _7260ee83,
      name: "index-pages"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
