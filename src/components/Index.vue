<template>
    <!-- Content -->
    <div class="cd-hero">
        <!-- Navigation -->
        <div class="cd-slider-nav">
            <nav class="navbar">
                <div class="tm-navbar-bg">
                    <a class="navbar-brand text-uppercase" v-bind:href = "clientDomain">
                        <img class="logo-img" :src="require('@/assets/img/gallery.png')"/> Gallery
                    </a>
                    <!--<div class="container-hpbd">
                        <h2 class="loki">
                            <p class="letter">H</p>
                            <p class="letter">A</p>
                            <p class="letter">P</p>
                            <p class="letter">P</p>
                            <p class="letter">Y</p>
                            <p class="letter">B</p>
                            <p class="letter">I</p>
                            <p class="letter">R</p>
                            <p class="letter">T</p>
                            <p class="letter">H</p>
                            <p class="letter">D</p>
                            <p class="letter">A</p>
                            <p class="letter">Y</p>
                        </h2>
                    </div>-->
                    <div class="container-hpbd">
                        <h2 class="loki">
                            <img alt="heart" height="25" width="25" v-bind:src="require('@/assets/img/heart.png')"/>
                            <img alt="heart" height="25" width="25" v-bind:src="require('@/assets/img/heart.png')"/>
                            <img alt="heart" height="25" width="25" v-bind:src="require('@/assets/img/heart.png')"/>
                            <p class="letter">&nbsp;</p>
                            <p class="letter">T</p>
                            <p class="letter">H</p>
                            <p class="letter">U</p>
                            <p class="letter">&nbsp;</p>
                            <p class="letter">&nbsp;</p>
                            <p class="letter">H</p>
                            <p class="letter">I</p>
                            <p class="letter">E</p>
                            <p class="letter">N</p>
                            <p class="letter">&nbsp;</p>
                            <img alt="heart" height="25" width="25" v-bind:src="require('@/assets/img/heart.png')"/>
                            <img alt="heart" height="25" width="25" v-bind:src="require('@/assets/img/heart.png')"/>
                            <img alt="heart" height="25" width="25" v-bind:src="require('@/assets/img/heart.png')"/>
                        </h2>
                    </div>
                </div>
            </nav>
        </div>
        <ul class="cd-hero-slider">
            <!-- Page 1 Gallery One -->
            <li class="selected">
                <div class="cd-full-width tm-full-width">
                    <div class="container-fluid js-tm-page-content" data-page-no="1" data-page-type="gallery">
                        <div class="tm-img-gallery-container">
                            <div class="tm-img-gallery gallery-one">
                                <!-- Gallery One pop up connected with JS code below -->
                                <div v-for="file in files" :key="file.id" class="grid-item">
                                    <figure class="effect-sadie">
                                        <img v-bind:src = file.fileUriCrop alt="Image" class="img-fluid tm-img" >
                                        <figcaption>
                                            <h2 class="tm-figure-title"><span><strong></strong></span></h2>
                                            <p class="tm-figure-description"></p>
                                            <a v-bind:href = file.fileUriOriginal>View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <footer class="tm-footer">
            <div class="tm-social-icons-container text-xs-center">
                <a href="https://www.facebook.com/pqcuongg" target="_blank" class="tm-social-link"><i class="fa fa-facebook"></i></a>
                <a href="mailto:quoc.cuong.yb.dhtb@gmail.com" class="tm-social-link"><i class="fa fa-google"></i></a>
                <a href="https://www.instagram.com/_pqcuong_" target="_blank" class="tm-social-link"><i class="fa fa-instagram"></i></a>
                <a href="https://github.com/QuocCuong0701" target="_blank" class="tm-social-link"><i class="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/pquoccuong" target="_blank" class="tm-social-link"><i class="fa fa-linkedin"></i></a>
            </div>
            <div class="tm-copyright-text">
<!--                <audio controls loop id="theme-song" class="theme-song" :src="require('@/assets/audio/Photograph.mp3')"></audio>-->
                <p>Made with
                    <img alt="heart" height="20" width="20" v-bind:src="require('@/assets/img/heart.png')"/>
                    by <a class="made-by" href="https://github.com/QuocCuong0701" target="_blank">Quoc Cuong</a>
                    <br/>
                    <span style="font-size: 14px">Since 2021</span>
                </p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Qahiri&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
</style>

<script>
    import $ from 'jquery';
    import 'jquery';
    import 'bootstrap';
    import 'magnific-popup';
    import 'hero-slider';
    import 'tether';

    import axios from "axios";

    const serverDomain = "https://gift-4-you-service.herokuapp.com/";

    export default {
        name: "Index",
        rules: {
            "vue/no-multiple-template-root": "off"
        },
        data() {
            return {
                files: [],
                errors: [],
                clientDomain: "https://gift-4-you.herokuapp.com/"
            }
        },
        created() {
            axios.get(`${serverDomain}/`)
                .then(res => {
                    this.files = res.data.data;
                })
                .catch(e => {
                    this.errors.push(e);
                })
        }
    }

    var tm_gray_site = false;
    if (tm_gray_site) {
        $('html').addClass('gray');
    } else {
        $('html').removeClass('gray');
    }

    function adjustHeightOfPage(pageNo) {

        var pageContentHeight = 0;

        var pageType = $('div[data-page-no="' + pageNo + '"]').data("page-type");

        if (pageType !== undefined && pageType === "gallery") {
            pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .tm-img-gallery-container").height();
        } else {
            pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height() + 20;
        }

        // Get the page height
        var totalPageHeight = $('.cd-slider-nav').height() + pageContentHeight + $('.tm-footer').outerHeight();

        // Adjust layout based on page height and window height
        if (totalPageHeight > $(window).height()) {
            $('.cd-hero-slider').addClass('small-screen');
            $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
        } else {
            $('.cd-hero-slider').removeClass('small-screen');
            $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
        }
    }

    /*
        Everything is loaded including images.
    */
    $(window).on('load', function () {
        // document.getElementById("theme-song").volume = 0.7;
        adjustHeightOfPage(1); // Adjust page height

        /* Gallery One pop up
        -----------------------------------------*/
        // $(document).ready(function ($) {
        $('.gallery-one').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {enabled: true}
        });
        // });

        /* Gallery Two pop up
        -----------------------------------------*/
        /*$(document).ready(function ($) {
        $('.gallery-two').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {enabled: true}
        });
        });*/

        /* Gallery Three pop up
        -----------------------------------------*/
        /*$(document).ready(function ($) {
        $('.gallery-three').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {enabled: true}
        });
        });*/

        /* Collapse menu after click
        -----------------------------------------*/
        $('#tmNavbar a').click(function () {
            $('#tmNavbar').collapse('hide');
            adjustHeightOfPage($(this).data("no")); // Adjust page height
        });

        /* Browser resized
        -----------------------------------------*/
        $(window).resize(function () {
            var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
            setTimeout(function () {
                adjustHeightOfPage(currentPageNo);
            }, 1000);

        });

        $('body').addClass('loaded');
        // Write current year in copyright text.
        $(".tm-copyright-year").text(new Date().getFullYear());

        setTimeout(function () {
            var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
            adjustHeightOfPage(currentPageNo);
        }, 5000);
    });

    /*$(window).on('load', function () {
        document.getElementById("theme-song").play();
        var audio = document.getElementById("theme-song");
        audio.autoplay = true;
        audio.play();
    });*/

    // HPBD
    $(window).on('load', function () {
        const fonts = [
            'Kirang Haerang',
            'Indie Flower',
            'Rye',
            'Amatic SC',
            'Bangers',
            'Fredericka the Great',
            'Qahiri',
            'Festive'
        ];

        const letters = document.querySelectorAll('.letter');

        let count = 0;

        const rollIntro = () => {
            letters.forEach(letter => {

                let randomFontIndex = Math.floor(Math.random() * fonts.length);
                let randomFont = fonts[randomFontIndex];

                letter.style.fontFamily = randomFont;
            });
        };

        let time = Math.random() * (1000 - 700) + 700;
        let introAnimation = setInterval(function () {
            rollIntro();
            if (count > 15)
                clearInterval(introAnimation);
        }, time);
    });
</script>

<style scoped>

</style>
