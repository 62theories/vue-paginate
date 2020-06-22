import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import store from "./store/index"
import Home from "./Home.vue"
import PageTwo from "./PageTwo.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/pagetwo",
            component: PageTwo,
        },
    ],
})

new Vue({
    render: (h) => h(App),
    router,
    store,
}).$mount("#app")
