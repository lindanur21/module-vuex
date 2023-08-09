import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Berita from "../views/Berita.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;