import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PrivacyPage from "./pages/PrivacyPage.vue";
import NotFound from "./pages/NotFound.vue";
import CartPage from "./pages/CartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductPage from "./pages/ProductPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      name: "home",
      path: "/home",
      component: HomePage,
    },
    {
      path: "/privacy",
      component: PrivacyPage,
    },
    {
      path: "/cart",
      component: CartPage,
    },
    {
      path: "/products",
      component: ProductsPage,
    },
    {
      path: "/products/:id",
      component: ProductPage,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
