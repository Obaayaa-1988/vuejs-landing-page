<template>
  <div id="app">
    
    <!-- <LandingPage :links="navBar" :post="posts" /> -->
    <router-view></router-view>
    <!-- <LandingPage /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // LandingPage,
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

</style>
