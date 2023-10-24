let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let backdrop = document.getElementById("backdrop");
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");
let modal5 = document.getElementById("modal5");
let modal6 = document.getElementById("modal6");

img1.onclick = showModal1;
img2.onclick = showModal2;
img3.onclick = showModal3;
img4.onclick = showModal4;
img5.onclick = showModal5;
img6.onclick = showModal6;

backdrop.onclick = hideModal1;

function hideModal1() {
    backdrop.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    enableBackdropButtons();
}

function showModal1() {
    modal1.style.display = "block";
    backdrop.style.display = "block";
}

function showModal2() {
    modal2.style.display = "block";
    backdrop.style.display = "block";
}

function showModal3() {
    modal3.style.display = "block";
    backdrop.style.display = "block";
}

function showModal4() {
    modal4.style.display = "block";
    backdrop.style.display = "block";
}

function showModal5() {
    modal5.style.display = "block";
    backdrop.style.display = "block";
}

function showModal6() {
    modal6.style.display = "block";
    backdrop.style.display = "block";
}

var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

var Dot = function() {
    this.x = 0;
    this.y = 0;
    this.node = (function(){
        var n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
    }());
};
Dot.prototype.draw = function() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
}

function draw() {
    var x = mouse.x,
        y = mouse.y;

    dots.forEach(function(dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}

addEventListener("mousemove", function(event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();