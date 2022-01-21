import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        // {
        //     path: "/",
        //     name: "register",
        //     component: () => import("./userlogin/RegisterUser")
        // },
        {
            path: "/",
            name: "templateLogin",
            component: () => import("./userlogin/TemplateLogin")
        },
        {
            path: "/home",
            name: "home",
            component: () => import("./components/Home"),
            children:[{
                path: '/sidebar',
                component: () => import("./components/sidebar")
            }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./components/login")
        },
        {
            path: "/Page",
            name: "Page",
            component: () => import("./userlogin/Page")
        },
        {
            path: "/loginU",
            name: "loginU",
            component: () => import("./userlogin/LoginUser")
        },
        {
            path: "/ld",
            name: "ld",
            component: () => import("./userlogin/DialogUser")
        },
    ]
});