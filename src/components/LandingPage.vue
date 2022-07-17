<template>
    <div class="hello">
        <!-- <h1>{{ msg }}</h1> -->

        <!----Header section only-->
        <header>
            <div class="nav-page">
                <div class="fashion-logo">
                    <h2></h2>
                </div>

                <nav>
                    <ul>
                        <li><a href="#Home.html" target="_blank" rel="noopener">Home</a></li>
                        <li><a href="#Shop.html" target="_blank" rel="noopener">Shop</a></li>
                        <li><a href="#Delivery.html" target="_blank" rel="noopener">Delivery</a></li>
                        <li><a href="#About.html" target="_blank" rel="noopener">About</a></li>
                        <li><a href="#Notification.html" target="_blank" rel="noopener">Notification</a></li>
                    </ul>
                </nav>
                <div class="fashion-circle"></div>

            </div>



        </header>

        <!---------section1 only-->
        <div class="container">
            <div class="main-grid">

                <div class="fashion-name">
                    <h1>ASHBELLA .</h1>
                </div>
                <div class="grid-image">
                    <div class="image1"><img :src="require('@/assets/mage11.jpg')" /></div>
                    <div class="image2"><img :src="require('@/assets/mage8.jpg')" /></div>
                    <div class="image3"><img :src="require('@/assets/mage5.jpg')" /></div>
                    <div class="image4"><img :src="require('@/assets/mage3.jpg')" /></div>
                    <div class="image5"><img :src="require('@/assets/mage4.jpg')" /></div>
                    <div class="image6"><img :src="require('@/assets/mage9.jpg')" /></div>
                </div>

            </div>

        </div>

        <footer>
            <p className='footer-para'>Powered By Walulel Ghana &copy; 2022 | Theme By: <span class="">Ashbella</span>
            </p>
        </footer>

    </div>

</template>

<script>
export default {
    name: 'LandingPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    padding: 0;
    margin: 0;

}

header {
    background-image: url('~@/assets/mage2.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    margin-bottom: 5rem;
    /* object-fit: fill; */
}

.fashion-logo {
    background-color: #EC7063;
    color: white;
    text-align: center;
    margin-left: 2rem;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}

/* .fashion-circle {
    
    background: #12c2e9;
    background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
    color: white;
    text-align: center;
    height: 250px;
    width: 250px;
    border-radius: 50%;

} */

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
    margin-top: 2;
    margin-left: 5rem;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* .span{
    font-size: 2rem;
    background-color: #EC7063;
} */


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
