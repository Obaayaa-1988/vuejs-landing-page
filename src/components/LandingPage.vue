<template>
    <div class="hello">
        <!-- <h1>{{ msg }}</h1> -->

        <!----Header section only-->
        <header> 
            <div class="nav-page">
             <div class="fashion-logo">
                <h2>Fashion</h2>
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
        <!-- <div class="grid-main">
            <div class="fashion-name">
                <h1>ASHBELLA <span>.</span></h1>
            </div>
            <div class="row">
                <div class="column">
                    <div class="color1">
                        <h2>color1</h2>
                    </div>
                    <img :src="require('@/assets/mage3.jpg')" />
                    <img :src="require('@/assets/mage4.jpg')" />
                    <img :src="require('@/assets/mage5.jpg')" />
                    <div class="color2">
                        <h2>color2</h2>
                    </div>

                </div>

                <div class="column">
                    <div class="color1">
                        <h2>color1</h2>
                    </div>
                    <img :src="require('@/assets/mage6.jpg')" />
                    <img :src="require('@/assets/mage7.jpg')" />
                    <img :src="require('@/assets/mage8.jpg')" />
                    <div class="color2">
                        <h2>color2</h2>
                    </div>

                </div>


            </div>


        </div> -->




    </div>


</template>

<script>
export default {
    name: 'LandingPage',
    // data() {
    //    return image: { {backgroundImage: "url(./assets/mage1.jpg)"}}
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    padding: 0;
    margin: 0;

}
header{
    background-image: url('~@/assets/mage1.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    /* object-fit: fill; */
}

.fashion-logo{
    background-color:#EC7063;
    color: white;
    text-align: center;
    margin-top: 2rem;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    
}

.fashion-circle{
    /* background-color:#EC7063; */
    background: #12c2e9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: white;
    text-align: center;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    /* position: absolute;
    top: 80%;
    left: 10% */
}
.nav-page {
    display: flex;
    justify-content: space-between;
    position: relative;
}


h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: white;
}
</style>
