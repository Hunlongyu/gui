import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { name: 'home', path: '/', component: () => import('../views/home.vue') },
    { name: 'download', path: '/download', component: () => import('../views/download.vue') },
    { name: 'settings', path: '/settings', component: () => import('../views/settings.vue') },
    { name: 'about', path: '/about', component: () => import('../views/about.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router