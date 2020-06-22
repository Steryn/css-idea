import Vue from 'vue'
import VueRouter from 'vue-router'
import { lists } from "./list";

export let router = new VueRouter({
    routes: [
        // {
        //   path: '/',
        //   redirect: '/home'
        // },
        // {
        //   path: '/home',
        //   component: () => import('@/pages/Home.vue'),
        //   name: 'Home',
        // },
        {
            path: '/bgAttachment',
            component: () => import('./pages/bgAttachment.vue'),
            name: 'bgAttachment',
        },
        {
            path: '/bgAttachment2',
            component: () => import('./pages/bgAttachment2.vue'),
            name: 'bgAttachment2',
        },
        {
            path: '/burgerMenu',
            component: () => import('./pages/burgerMenu.vue'),
            name: 'burgerMenu',
        },
        {
            path: '/InterlacedTextAnimation',
            component: () => import('./pages/burgerMenu.vue'),
            name: 'burgerMenu',
        },
    ]
})