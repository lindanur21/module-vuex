import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/Index.vue";
import UserCreate from "../views/user/Create.vue";
import Berita from "../views/Berita.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue";
import store from "../store";
import FilterPageKategori from "../views/FilterPageKategori.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "User",
        component: User,
        meta: {requireLogin: true},
    },
    {
        path: "/users/create",
        name: "UserCreate",
        component: UserCreate,
        meta: {requireLogin: true},
    },
    {
        path: "/berita",
        name: "Berita",
        component: Berita,
    },
    {
        path: "/produk",
        name: "Product",
        component: Product,
    },
    {
        path: "/produk/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/kategori",
        name: "Category",
        component: Category,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {requireGuest: true},
    },
    {
        path: "/category/:category",
        name: "FilterCategory",
        component: FilterPageKategori,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/"); // redirect to home
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login"); // redirect to home
    } else {
        next();
    }
});

export default router;