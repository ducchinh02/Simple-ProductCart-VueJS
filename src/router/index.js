import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product',
        name: 'product',
        component: () =>
            import ('../views/Product.vue')
    },
    {
        path: '/check-cart',
        name: 'check-cart',
        component: () =>
            import ('../views/CheckCart.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router