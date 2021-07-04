<template>
    <div id="app">
        <Index/>
        <LoaderWrapper/>
    </div>
</template>

<script>
    import Index from '@/components/Index.vue'
    import LoaderWrapper from "@/components/LoaderWrapper";

    export default {
        name: 'App',
        components: {
            LoaderWrapper,
            Index
        }
    }
</script>

<style>
    @import "assets/css/bootstrap.min.css";
    @import "assets/css/hero-slider-style.css";
    @import "assets/css/magnific-popup.css";
    @import "assets/css/templatemo-style.css";
    @import "assets/css/style.css";
    @import "assets/Font-Awesome-4.7/css/font-awesome.min.css";
    @import "//fonts.googleapis.com/css?family=Open+Sans: 300,400,600";

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
