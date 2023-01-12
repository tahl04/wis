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





//json 연동

fetch('./data/sub3.json')
.then(function(res){return res.json()})
.then(function(gallery){
    init0(gallery.dataF);
    init1(gallery.dataM);
    init2(gallery.dataD);
    init3(gallery.dataG);
});


//card select

const fwh1 = document.querySelector(".forw .card h1"),
fwh2 = document.querySelector(".forw .card h2"),
fwh3 = document.querySelector(".forw .card h3"),
fwh4 = document.querySelector(".forw .card h4"),
fwImg = document.querySelector(".forw .card img"),
mdh1 = document.querySelector(".mid .card h1"),
mdh2 = document.querySelector(".mid .card h2"),
mdh3 = document.querySelector(".mid .card h3"),
mdh4 = document.querySelector(".mid .card h4"),
mdImg = document.querySelector(".mid .card img"),
deph1 = document.querySelector(".dep .card h1"),
deph2 = document.querySelector(".dep .card h2"),
deph3 = document.querySelector(".dep .card h3"),
deph4 = document.querySelector(".dep .card h4"),
depImg = document.querySelector(".dep .card img"),
goalkh1 = document.querySelector(".goalk .card h1"),
goalkh2 = document.querySelector(".goalk .card h2"),
goalkh3 = document.querySelector(".goalk .card h3"),
goalkh4 = document.querySelector(".goalk .card h4"),
goalkImg = document.querySelector(".goalk .card img")

//슬라이드, 이미지 삽입, 반응형 슬라이드 갯수조절, card 컨텐츠 변경

function init0(dasta){
    const forw1 = document.querySelectorAll(".forw > .tab-content > .content-wrap > .korean-slid > .mySwiper1 > .swiper-wrapper > .swiper-slide");
    forw1.forEach((ks, keyw) => {
        ks.innerHTML += `<img src=${dasta[keyw].image}>`;
    });
    const forw2 = document.querySelectorAll(".forw > .tab-content > .content-wrap > .korean-slid > .mySwiper1-1 > .swiper-wrapper > .swiper-slide");
    forw2.forEach((ks, keyw) => {
        ks.innerHTML += `<img src=${dasta[keyw].image}>`;
    });
    let fw = 0;   
    let swiper1 = new Swiper(".mySwiper1", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        slidesPerView : 2, 
        spaceBetween : 1,
        loopAdditionalSlides : 2,
        loop:true,
        on:{
            init : function (){
                fwh1.textContent = dasta[0].name;
                fwh2.textContent = dasta[0].birth;
                fwh3.textContent = dasta[0].physical;
                fwh4.innerHTML = dasta[0].career;
                fwImg.src = dasta[0].sign;
            },
            slideChange : function () {
                fw = this.realIndex;
                fwh1.textContent = dasta[fw].name;
                fwh2.textContent = dasta[fw].birth;
                fwh3.textContent = dasta[fw].physical;
                fwh4.innerHTML = dasta[fw].career;
                fwImg.src = dasta[fw].sign;
            }
        }
    });
    let f1w = 0;   
    let swiper11 = new Swiper(".mySwiper1-1", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        slidesPerView : 1, 
        spaceBetween : 1,
        loopAdditionalSlides : 1,
        loop:true,
        on:{
            init : function (){
                fwh1.textContent = dasta[0].name;
                fwh2.textContent = dasta[0].birth;
                fwh3.textContent = dasta[0].physical;
                fwh4.innerHTML = dasta[0].career;
                fwImg.src = dasta[0].sign;
            },
            slideChange : function () {
                f1w = this.realIndex;
                fwh1.textContent = dasta[f1w].name;
                fwh2.textContent = dasta[f1w].birth;
                fwh3.textContent = dasta[f1w].physical;
                fwh4.innerHTML = dasta[f1w].career;
                fwImg.src = dasta[f1w].sign;
            }
        }
    });
}


//슬라이드, 이미지 삽입, 반응형 슬라이드 갯수조절, card 컨텐츠 변경


function init1(dasta){
    const mid = document.querySelectorAll(".mid > .tab-content > .content-wrap > .korean-slid > .mySwiper2 > .swiper-wrapper > .swiper-slide");
    mid.forEach((ks, keyw) => {
        ks.innerHTML += `<img src=${dasta[keyw].image}>`;
    });
    let mw = 0;   
    let swiper2 = new Swiper(".mySwiper2", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        slidesPerView : 2, 
        spaceBetween : 1,
        loopAdditionalSlides : 2,
        loop:true,
        on:{
            init : function (){
                mdh1.textContent = dasta[0].name;
                mdh2.textContent = dasta[0].birth;
                mdh3.textContent = dasta[0].physical;
                mdh4.innerHTML = dasta[0].career;
                mdImg.src = dasta[0].sign;
            },
            slideChange : function () {
                mw = this.realIndex;
                mdh1.textContent = dasta[mw].name;
                mdh2.textContent = dasta[mw].birth;
                mdh3.textContent = dasta[mw].physical;
                mdh4.innerHTML = dasta[mw].career;
                mdImg.src = dasta[mw].sign;
            }
        }
    });
    const mid1 = document.querySelectorAll(".mid > .tab-content > .content-wrap > .korean-slid > .mySwiper2-1 > .swiper-wrapper > .swiper-slide");
    mid1.forEach((ks, keyw) => {
        ks.innerHTML += `<img src=${dasta[keyw].image}>`;
    });
    let m1w = 0;   
    let swiper21 = new Swiper(".mySwiper2-1", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        slidesPerView : 1, 
        spaceBetween : 1,
        loopAdditionalSlides : 1,
        loop:true,
        on:{
            init : function (){
                mdh1.textContent = dasta[0].name;
                mdh2.textContent = dasta[0].birth;
                mdh3.textContent = dasta[0].physical;
                mdh4.innerHTML = dasta[0].career;
                mdImg.src = dasta[0].sign;
            },
            slideChange : function () {
                m1w = this.realIndex;
                mdh1.textContent = dasta[m1w].name;
                mdh2.textContent = dasta[m1w].birth;
                mdh3.textContent = dasta[m1w].physical;
                mdh4.innerHTML = dasta[m1w].career;
                mdImg.src = dasta[m1w].sign;
            }
        }
    });
}


//슬라이드, 이미지 삽입, 반응형 슬라이드 갯수조절, card 컨텐츠 변경



function init2(dasta){
    const dep = document.querySelectorAll(".dep > .tab-content > .content-wrap > .korean-slid > .mySwiper3 > .swiper-wrapper > .swiper-slide");
    dep.forEach((ks, keyw) => {
        ks.innerHTML += `<img src=${dasta[keyw].image}>`;
    });
    let iw = 0;   
    let swiper3 = new Swiper(".mySwiper3", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        slidesPerView : 2, 
        spaceBetween : 1,
        loopAdditionalSlides : 2,
        loop:true,
        on:{
            init : function (){
                deph1.textContent = dasta[0].name;
                deph2.textContent = dasta[0].birth;
                deph3.textContent = dasta[0].physical;
                deph4.innerHTML = dasta[0].career;
                depImg.src = dasta[0].sign;
            },
            slideChange : function () {
                iw = this.realIndex;
                deph1.textContent = dasta[iw].name;
                deph2.textContent = dasta[iw].birth;
                deph3.textContent = dasta[iw].physical;
                deph4.innerHTML = dasta[iw].career;
                depImg.src = dasta[iw].sign;
            }
        }
    });
    const dep1 = document.querySelectorAll(".dep > .tab-content > .content-wrap > .korean-slid > .mySwiper3-1 > .swiper-wrapper > .swiper-slide");
    dep1.forEach((ks, keyw) => {
        ks.innerHTML += `<img src=${dasta[keyw].image}>`;
    });
    let i1w = 0;   
    let swiper31 = new Swiper(".mySwiper3-1", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        slidesPerView : 1, 
        spaceBetween : 1,
        loopAdditionalSlides : 1,
        loop:true,
        on:{
            init : function (){
                deph1.textContent = dasta[0].name;
                deph2.textContent = dasta[0].birth;
                deph3.textContent = dasta[0].physical;
                deph4.innerHTML = dasta[0].career;
                depImg.src = dasta[0].sign;
            },
            slideChange : function () {
                i1w = this.realIndex;
                deph1.textContent = dasta[i1w].name;
                deph2.textContent = dasta[i1w].birth;
                deph3.textContent = dasta[i1w].physical;
                deph4.innerHTML = dasta[i1w].career;
                depImg.src = dasta[i1w].sign;
            }
        }
    });
}


//슬라이드, 이미지 삽입, 반응형 슬라이드 갯수조절, card 컨텐츠 변경


function init3(dasta){
    const goalk = document.querySelectorAll(".goalk > .tab-content > .content-wrap > .korean-slid > .mySwiper4 > .swiper-wrapper > .swiper-slide");
    goalk.forEach((ks, keyw) => {
        ks.innerHTML += `<img src=${dasta[keyw].image}>`;
    });
    let gw = 0;   
    let swiper4 = new Swiper(".mySwiper4", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        slidesPerView : 2, 
        spaceBetween : 1,
        loopAdditionalSlides : 2,
        loop:true,
        on:{
            init : function (){
                goalkh1.textContent = dasta[0].name;
                goalkh2.textContent = dasta[0].birth;
                goalkh3.textContent = dasta[0].physical;
                goalkh4.innerHTML = dasta[0].career;
                goalkImg.src = dasta[0].sign;
            },
            slideChange : function () {
                gw = this.realIndex;
                goalkh1.textContent = dasta[gw].name;
                goalkh2.textContent = dasta[gw].birth;
                goalkh3.textContent = dasta[gw].physical;
                goalkh4.innerHTML = dasta[gw].career;
                goalkImg.src = dasta[gw].sign;
            }
        }
    });
    const goalk1 = document.querySelectorAll(".goalk > .tab-content > .content-wrap > .korean-slid > .mySwiper4-1 > .swiper-wrapper > .swiper-slide");
    goalk1.forEach((ks, keyw) => {
        ks.innerHTML += `<img src=${dasta[keyw].image}>`;
    });
    let g1w = 0;   
    let swiper41 = new Swiper(".mySwiper4-1", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        slidesPerView : 1, 
        spaceBetween : 1,
        loopAdditionalSlides : 1,
        loop:true,
        on:{
            init : function (){
                goalkh1.textContent = dasta[0].name;
                goalkh2.textContent = dasta[0].birth;
                goalkh3.textContent = dasta[0].physical;
                goalkh4.innerHTML = dasta[0].career;
                goalkImg.src = dasta[0].sign;
            },
            slideChange : function () {
                g1w = this.realIndex;
                goalkh1.textContent = dasta[g1w].name;
                goalkh2.textContent = dasta[g1w].birth;
                goalkh3.textContent = dasta[g1w].physical;
                goalkh4.innerHTML = dasta[g1w].career;
                goalkImg.src = dasta[g1w].sign;
            }
        }
    });
}


//탭 메뉴 구성


let tabManu = $("#tab-menu");
tabManu.find(".tab-ul > .tab-li > .tab-content").hide();
tabManu.find(".tab-li.active > .tab-content").show();
function tabList(e){
   e.preventDefault();           
   let target = $(this);
   target.next().show().parent(".tab-li").addClass("active").siblings(".tab-li").removeClass("active").find(".tab-content").hide();
    
}
tabManu.find(".tab-ul > .tab-li > .li-tag").click(tabList).focus(tabList);



