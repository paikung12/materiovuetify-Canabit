import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: () => import('@/views/transactions/Transaction.vue'),
  },
  {
    path: '/partner',
    name: 'partner',
    component: () => import('@/views/partner/Partner.vue'),
  },
  {
    path: '/profilebrand',
    name: 'profilebrand',
    component: () => import('@/views/profilebrand/profilebrand.vue')
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/connection',
    name: 'Connection',
    component: () => import('@/views/Connection'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/cashout',
    name: 'cashout',
    component: () => import('@/views/cashout/Cashout.vue'),
  },
  {
    path: '/redeem',
    name: 'redeem',
    component: () => import('@/views/redeem/Redeem.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/redeemspecial',
    name: 'redeemspecial',
    component: () => import('@/views/redeem/RedeemSpecial.vue')
  },
  {
    path: '/reward',
    name: 'reward',
    component: () => import('@/views/reward/Reward.vue'),
    
  },
  {
    path: '/forex',
    name: 'forex',
    component: () => import('@/views/forex/Forex.vue'),
  },
  {
    path: '/historyaccount',
    name: 'historyaccount',
    component: () => import('@/views/historyaccount/HistoryAccount.vue'),
  },
  {
    path: '/semiauto',
    name: 'semiauto',
    component: () => import('@/views/semiauto/Semiauto.vue'),
  },
  {
    path: '/signals',
    name: 'signals',
    component: () => import('@/views/signals/Signals.vue'),
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
