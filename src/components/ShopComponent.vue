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
        

    
    
  </div>
</template>

<script>
export default {
  name: "ShopComponent",
};
</script>

<style>
</style>