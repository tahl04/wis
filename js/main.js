$('body').prepend('<div class="Menu">');
$('body').prepend('<header>');

$('header').load("./inc.html header");
$('.Menu').load("./inc.html .Menu .background, .menuTop",menu);


function menu(){
    // ball
    var cvs = document.querySelector("canvas");
    var menu = document.querySelector(".Menu");
    var ctx = cvs.getContext("2d");
    if(menu.offsetWidth<=767){
        cvs.width = menu.offsetWidth;
        cvs.height = window.innerHeight*0.99;
    }else{
        cvs.width = window.innerWidth*0.53;
        cvs.height = window.innerHeight*0.95;
    }

    window.onresize = function(){
        if(menu.offsetWidth<=767){
            console.log(menu.offsetWidth);
            cvs.width = menu.offsetWidth;
            console.log(cvs.width);
        } else{
            innerWidth <= 0 ? (cvs.width = 360) : (cvs.width = window.innerWidth*0.53);
            innerHeight <= 0 ? (cvs.height = 400) : (cvs.height = window.innerHeight*0.95);
        }
    }


    var balls = [];
    var numberOfBalls = 1;
    if(menu.offsetWidth<=767){
        var ballRadius = 20;
    }else{
        var ballRadius = 26;
    }

    for (var i = 0; i < numberOfBalls; i++) {
        balls.push({
            x: Math.floor(Math.random() * (cvs.width - 2 * ballRadius)) + ballRadius,
            y: Math.floor(Math.random() * (cvs.height - 2 * ballRadius)) + ballRadius,
            dx: 1,
            dy: 1,
            sp: 3,
            color:"rgb(129, 129, 129)"
        });
    }

    function drawBall() {
        for (var i = 0; i < numberOfBalls; i++) {
            var ball = balls[i];
            ctx.beginPath();
            if(menu.offsetWidth<=767){
                ctx.strokeStyle = "white";
            }else{
                ctx.strokeStyle = ball.color;
            }
            ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2, false);
            ctx.stroke();
        }
    }

    function moveBall() {
        for (var i = 0; i < numberOfBalls; i++) {
            var ball = balls[i];

            if (ball.x - ballRadius < 0 || ball.x + ballRadius > cvs.width) {
                ball.dx = -ball.dx;
            }
            if (ball.y - ballRadius < 0 || ball.y + ballRadius > cvs.height) {
                ball.dy = -ball.dy;
            }

            ball.x += ball.sp * ball.dx;
            ball.y += ball.sp * ball.dy;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        moveBall();
        drawBall();
        requestAnimationFrame(draw, cvs);
    }
    draw();


    //menu
    const Menu = document.querySelector(".Menu");
    const esc =  document.querySelector(".escBtn");
    const menuBtn =  document.querySelector(".menuBtn");

    esc.addEventListener("click",function(){
        esc.classList.add("active");
        setTimeout(() => menuBtn.classList.remove("active"),1500);
        setTimeout(() => Menu.style = "transform: translateY(-100%)",600);
    })
    
    menuBtn.addEventListener("click",function(){
        menuBtn.classList.add("active");        
        setTimeout(() => Menu.style = "transform: translateY(0%)",600);
        setTimeout(() => esc.classList.remove("active"),1500);
    })

}

const navList = document.querySelectorAll(".swiper-nav > ul > li");
const footer = document.querySelector(".footer");
const navCon = document.querySelector(".navCon");
const wis = document.querySelector(".wis");
const processbar = document.querySelector(".processbar");
const processball = document.querySelector(".processball");
i=0;

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }, 
	speed : 1000,  
    on: {       
        slideChange : function () {   
            navList[i].style = "color : black;  transform: scale(1); font-weight:500 ";
            i= this.realIndex;
            setTimeout(()=>{
                navList[this.realIndex].style = "color : #4FA638;  transform: scale(1.1) translateX(5px); font-weight:700";
            },200)
            if(i==3){
                setTimeout(()=>{
                    footer.style="transform: translateY(0)"
                },650)
            }else{              
                footer.style="transform: translateY(100%)"
            }
            processball.style = `transform:translateY(${ -170+(i*108)}px)`
    }}
});


setInterval(function(){
    let $first = $(".korean-slider ul li").first();
    $(".korean-slider ul").stop().animate({"margin-left":"-50%"}, 1000, function(){
        $(".korean-slider ul").append($first).css("margin-left", "0%");
    });
}, 3000);

let be = ["./img/한국1.jpg","./img/한국2.jpg","./img/한국3.png","./img/한국4.png"]
let num = 0;


setInterval(function(){
    
    $(".main-img").css("background-image", "url(" + be[num] + ")");
    num++;
    if(num == be.length){
        num = 0;
    }
    let first = $(".korean-slider ul li").first();
    $(".korean-slider ul").stop().animate({"margin-left":"-50%"}, 1000, function(){
        $(".korean-slider ul").append(first).css("margin-left", "0%");
    });
}, 3000);



function init() {
let Dday = document.querySelectorAll('.Dday')
let endDay = new Date('2026-06-01 12:00:00').getTime();
let oneDay = 24 * 60 * 60 * 1000;                        

setInterval(function () {
    let today = new Date().getTime();
    let date = Math.round((endDay - today) / oneDay);
    const WD = document.querySelector('.worldcup-count > .day');

    Dday.forEach((d)=>{
        d.textContent = date;
    })
    }, 1000)
} window.onload = init;