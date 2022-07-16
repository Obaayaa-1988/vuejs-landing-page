<template>
    <div class="hello">
        <!-- <h1>{{ msg }}</h1> -->

        <!----Header section only-->
        <header>

            <div class="fashion-logo">
                <h2>Fashion</h2>
            </div>

            <div class="nav-page">
                <nav>
                    <ul>
                        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
                        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
                        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
                        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
                        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
                    </ul>
                </nav>

            </div>

            <div class="fashion-circle">Hello</div>

        </header>

        <!---------section1 only-->
        <div class="grid-main">
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


        </div>




    </div>


</template>

<script>
export default {
    name: 'LandingPage',
    // props: {
    //     msg: String
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    display: flex;
    justify-content: space-between;
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
    color: #42b983;
}
</style>
