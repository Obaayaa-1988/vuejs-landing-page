<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LandingPage :links="navBar" :post="posts" /> -->
    <LandingPage />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    LandingPage,
  },
  data() {
    return {
      // navBar: [
      //   {
      //     url: "#Home.html",
      //     name: "Home",
      //   },

      //   {
      //     url: "#Shop.html",
      //     name: "Shop",
      //   },

      //   {
      //     url: "#Delivery.html",
      //     name: "Delivery",
      //   },

      //   {
      //     url: "#About.html",
      //     name: "About",
      //   },
      //   {
      //     url: "#Notification.html",
      //     name: "Notification",
      //   },
      // ],
      posts: {
        title: "The Best Is Yet To Come",
        numberOfLikes: 200,
      },
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
