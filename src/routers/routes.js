import LandingPage from "../components/LandingPage.vue";
// import Home from "./components/Home.vue";
import ShopComponent from "../components/ShopComponent.vue";
import LiveComponent from "../components/LiveComponent.vue";
// import About from "./components/About.vue";
// import Notification from "./components/Notification.vue";

const routes = [
    { path: "/", name: "Home", component: LandingPage },
    { path: "/ShopComponent", name: "Shop", component: ShopComponent },
    { path: "/DeliveryComponent", name: "Delivery", component: LiveComponent },

]

export default routes;