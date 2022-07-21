<template>
  <div>
    <!----Header section only-->
    <header>
      <div class="nav-page">
        <div class="fashion-logo"></div>

        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/shop">Shop</router-link>
          <router-link to="/delivery">Delivery</router-link>
          <router-view></router-view>
          <!-- <router-link to="/about">About</router-link>
          <router-link to="/notification">Notification</router-link> 

          <!- <ul>
            <li v-for="(link, index) in links" :key="index">
              <a :href="link.url">{{ link.name }}</a>
            </li>
          </ul> -->
        </nav>

        <!-- <div>
          <h1>{{ post.title }}</h1>
          <p>{{ post.numberOfLikes }}</p>
        </div> -->

        <div class="fashion-circle"></div>
      </div>

      <div class="great">
        <h1>GREATNESS</h1>
      </div>
      <div class="great2">
        <button>Learn More</button>
      </div>
    </header>

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
      <h1>MILLENIUM GREATNESS</h1>
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
    <!------footer section-->

    <footer>
      <p className="footer-para">
        Powered By Walulel Ghana &copy; 2022 | Theme By: <span>Ashbella</span>
      </p>
    </footer>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
// import ShopComponent from "./ShopComponent.vue";
// import LiveComponent from "./LiveComponent.vue";
// import About from "./components/About.vue";
// import Notification from "./components/Notification.vue";

export default {
  name: "LandingPage",
  props: {
    links: Array,
    post: Object,
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
  // ShopComponent,
  // LiveComponent,
  //   About,
  //   Notification,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
}

header {
  background-image: url("~@/assets/mage2.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  margin-bottom: 5rem;
}

.fashion-logo {
  background-color: #ec7063;
  color: white;
  text-align: center;
  margin-left: 2rem;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.nav-page {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.great {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.great h1 {
  color: white;
  font-size: 5rem;
  margin-top: 10rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.great2 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

button {
  padding: 1rem 2.5rem;
  background-color: burlywood;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 9rem;
  margin-top: 2rem;
}

.container {
  width: 80%;
  margin: auto;
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.fashion-name {
  writing-mode: vertical-lr;
  font-size: 5rem;
  margin-left: 5rem;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.grid-image {
  display: grid;
  grid-gap: 1.5rem;
}

.grid-image img {
  width: 130%;
  height: 100%;
  object-fit: cover;
}

.image1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

.image2 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
}

.image3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
}

.image4 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;
}

.image5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 9;
}

.image6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
}

section {
  background-image: url("~@/assets/mage2.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 130vh;
  width: 100%;
}

section h1 {
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 4rem;
  font-size: 3rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.main-card {
  display: flex;
  gap: 20px;
  /* grid-template-columns: 1fr 1fr 1fr; */
}

.card-inner {
  width: 23rem;
  height: 44rem;
  border-radius: 15px;
  padding: 5px;
  background-color: white;
}

.main-card img {
  width: 100%;
  height: 100%;
}

.btn {
  padding: 1.1rem 3rem;
  margin-top: 2rem;
  border: none;
  outline: none;
  background-color: burlywood;
  text-align: center;
  color: white;
  margin-left: 7rem;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
}

footer {
  height: 200px;
  background-color: rgb(34, 33, 33);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
