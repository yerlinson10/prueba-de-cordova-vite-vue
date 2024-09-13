import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        // {
        //     path: '/',
        //     name: 'home',
        //     component: HomeView
        // },
        {
            path: '/counter',
            name: 'Counter',
            component: () => import('../components/Counter.vue')
        },
        {
            path: '/lista-de-tareas',
            name: 'ListaDeTareas',
            component: () => import('../components/ListaDeTareas.vue')
        }
    ]
})

export default router;