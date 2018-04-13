/* global Vue */

import Router from 'vue-router'

import ViewHome from '@/assets/views/home.vue'
import ViewTopic from '@/assets/views/topic.vue'
import ViewClass from '@/assets/views/class.vue'
import ViewShop from '@/assets/views/shop.vue'
import ViewMy from '@/assets/views/my.vue'
//import HelloWorld from '@/components/HelloWorld'

/*
const ViewHome = require(['./assets/views/home.vue'])
const ViewTopic = require(['./assets/views/topic.vue'])
const ViewClass = require('./assets/views/class.vue')
const ViewShop = require('./assets/views/shop.vue')
const ViewMy = require('./assets/views/my')
*/

Vue.use(Router)

export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: ViewHome },
        { path: '/topic', component: ViewTopic },
        { path: '/class', component: ViewClass },
        { path: '/shop', component: ViewShop },
        { path: '/my', component: ViewMy }

    ]
})