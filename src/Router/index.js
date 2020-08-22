import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../Home/HomeView'
import AddCardView from '../AddCard/AddCardView'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: "Home",
        component: HomeView
    },
    {
        path: '/Add',
        name: "Add",
        component: AddCardView
    }
    ],
})
