<template>
  <div class="hello">
    <header>
      <div class="nav-page">
        <div class="fashion-logo"></div>
        <nav>
          <ul>
            <li> <router-link to="/">Home</router-link></li>
            <li><router-link to="/delivery">Delivery</router-link></li>
            <li> <router-link to="/about">About</router-link></li>
            <li> <router-link to="/notification">Notification</router-link>  </li>
          </ul>
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

    <div v-for="(post, index) in posts" :key="index">
      <h1 class="real">{{ post.title }}</h1>
      <p class="real">{{ post.numberOfLikes }}</p>
    </div>
        
    
  </div>
</template>

<script>
export default {
  name: "ShopComponent",

  props: {

    post: Object,

  }
};
</script>

<style scoped>
.real {
  font-size: 30px;
  color: blue;
}
</style>