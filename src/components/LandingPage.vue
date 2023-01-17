<template>
  <div>
    <!----Header section only-->
    <header>
      <div class="nav-page">
        <div class="fashion-logo"></div>

        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/delivery">Delivery</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/notification">Notification</router-link></li>
          </ul>
          <!-- <ul>
            <li v-for="(link, index) in links" :key="index">
              <a :href="link.url">{{ link.name }}</a>
            </li>
          </ul>  -->
        </nav>
        <div class="fashion-circle"></div>
      </div>

      <div class="great">
        <h1>GREATNESS</h1>
        
      </div>
      <div class="great2">
        <button>Learn More</button>
      </div>
      
    </header>
    <!-----practice side-->

    <!-- <h2  class="real">
      {{ song.title }}
    
    </h2> -->

    
    

    <!---------section1 only-->
    <div class="container">
      <div class="main-grid">
        <div class="fashion-name">
          <h1>ASHBELLA .</h1>
        </div>
        <div class="grid-image">
          <div class="image1">
            <img src="../assets/mage11.jpg" />
          </div>
          <div class="image2"><img src="../assets/mage7.jpg" /></div>
          <div class="image3"><img src="../assets/mage5.jpg" /></div>
          <div class="image4"><img src="../assets/mage3.jpg" /></div>
          <div class="image5"><img src="../assets/mage4.jpg" /></div>
          <div class="image6"><img src="../assets/mage9.jpg" /></div>
        </div>
      </div>
    </div>
    <!-------card section-->
    <section>
      <h1 class="head-text">MILLENIUM GREATNESS</h1>
      <div class="container">
        <div class="main-card">
          <div v-for="(image, index) in images" :key="index" class="card-inner">
            <div><img :src="image" /></div>

            <div class="card-bottom">
              <button class="btn">Shop</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div id="grid-container">
      <div class="grid-color">
        <h4>mi casa</h4>
      </div>
      <div class="grid-text">
        <h4>hello there</h4>
      </div>
    </div> -->
    <!------footer section-->


    <!-- <div v-for="(post, index) in posts" :key="index">
      <h1 class="real">{{ post.title }}</h1>
      <p class="real">{{ post.numberOfLikes }}</p>
    </div> -->

    

    <footer>
      <p className="footer-para">
        Powered By Walulel Ghana &copy; 2022 | Theme By: <span>Ashbella</span>
      </p>
    </footer>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
import ShopComponent from "./ShopComponent.vue";
// import LiveComponent from "./LiveComponent.vue";
// import About from "./components/About.vue";
// import Notification from "./components/Notification.vue";

export default {
  name: "LandingPage",
  props: {
    // links: Array,
    post: Object,
    // song: Object,
  },
  data() {
    return {
      images: [
        require("../assets/mage10.jpg"),
        require("../assets/mage1.jpg"),
        require("../assets/mage8.jpg"),
      ],
    };
  },

  // components: {
  //   Home,
  ShopComponent,
  // LiveComponent,
  //   About,
  //   Notification,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/style.css";
</style>
