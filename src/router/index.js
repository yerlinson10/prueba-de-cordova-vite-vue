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
            component: () => import('../modules/Contador/components/Counter.vue')
        },
        {
            path: '/lista-de-tareas',
            name: 'ListaDeTareas',
            component: () => import('../modules/ListaDetareas/components/ListaDeTareas.vue')
        },
        {
            path: '/registrar',
            name: 'Registrar',
            component: () => import('../modules/Registro/view/RegistrarView.vue')
        }
    ]
})

export default router;