import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

const app = new Vue({
    render: h => h(App)
});
app.$mount('#app');

var brd = document.getElementById('app');
document.body.insertBefore(brd, document.getElementById("board"));

const duration = 5000;
const speed = 0.7;
const cursorXOffset = 0;
const cursorYOffset = -5;

var hearts = [];

function generateHeart(x, y, xBound, xStart, scale) {
    var heart = document.createElement("DIV");
    heart.setAttribute('class', 'heart');
    brd.appendChild(heart);
    heart.time = duration;
    heart.x = x;
    heart.y = y;
    heart.bound = xBound;
    heart.direction = xStart;
    heart.style.left = heart.x + "px";
    heart.style.top = heart.y + "px";
    heart.scale = scale;
    heart.style.transform = "scale(" + scale + "," + scale + ")";
    if (hearts == null)
        hearts = [];
    hearts.push(heart);
    return heart;
}

var down = false;
var event = null;

document.onmousemove = function (e) {
    down = true;
    event = e;
};

var before = Date.now();
setInterval(frame, 7);
setInterval(check, 170);

function frame() {
    var current = Date.now();
    var deltaTime = current - before;
    before = current;
    for (var i in hearts) {
        var heart = hearts[i];
        heart.time -= deltaTime;
        if (heart.time > 0) {
            heart.y -= speed;
            heart.style.top = heart.y + "px";
            heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 200 + "px";
        } else {
            heart.parentNode.removeChild(heart);
            hearts.splice(i, 1);
        }
    }
}

function check() {
    if (down) {
        var start = 1 - Math.round(Math.random()) * 2;
        var scale = Math.random() * Math.random() * 0.8 + 0.2;
        var bound = 30 + Math.random() * 20;
        generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
    }
}