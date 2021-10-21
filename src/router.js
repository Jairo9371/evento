import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

//IMPORTACION DE LA VISTAS

import ListEvent from "./views/ListEvent"
import DetailEvent from "./views/DetailEvent"

//RUTAS

const router = new VueRouter({
    mode : 'history',
    routes: [
        {
        path : '/',
        component : ListEvent
        },
        {
            path : '/DetailEvent/:SlugOrganizer/:SlugEvent',
            component : DetailEvent
        }
    ]
});

export default router;