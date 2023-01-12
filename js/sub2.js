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
const processball = document.querySelector(".processball");
const swiper2 = document.querySelector(".swiper");
i=0;

var swiper = new Swiper(".mySwiper", {
    effect : 'fade',
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },   
    on: {       
        slideChange : function () {   
            navList[i].style = "color : black;  transform: scale(1); font-weight:500 ";
            i= this.realIndex;
            navList[this.realIndex].style = "color : #4FA638;  transform: scale(1.1) translateX(5px); font-weight:700";
            processball.style = `transform:translateY(${(i*108)}px)`
    }}
});



const tabA = document.querySelectorAll('.tab-a');
const tabM = document.querySelectorAll('.tab');
const M = document.querySelector('.logo>b');

tabA.forEach((t,k) => {
    q=0;
    t.addEventListener('click',function(){ 
            tabA[q].classList.remove('active-a');
            tabM[q].classList.remove('tab-active');
            q=k;
            tabA[k].classList.add('active-a');
            tabM[k].classList.add('tab-active');

            M.innerText = t.innerText;

            const logo = document.querySelector('.logo>b').innerText;
            logoO = '';

            for(let i=0;i<logo.length;i++){
                logoO +=`<span>${logo[i]}</span>`;
            }
            
            M.innerHTML = logoO;
            
            
        });
})



const tabB = document.querySelectorAll('.tab-b');
const tabBM = document.querySelectorAll('.tabB');

tabB.forEach((t,k) => {
    w=0;
    t.addEventListener('click',function(){ 
            tabB[w].classList.remove('active-b');
            tabBM[w].classList.remove('tab-active');
            w=k;
            tabB[k].classList.add('active-b');
            tabBM[k].classList.add('tab-active');
        });
})


const tabC = document.querySelectorAll('.tab-c');
const tabCM = document.querySelectorAll('.tabC');

tabC.forEach((t,k) => {
    e=0;
    t.addEventListener('click',function(){ 
            tabC[e].classList.remove('active-c');
            tabCM[e].classList.remove('tab-active');
            e=k;
            tabC[k].classList.add('active-c');
            tabCM[k].classList.add('tab-active');
        });
});

const tabC_P = document.querySelectorAll('.tab-c>div>p');
const tabC_D = document.querySelectorAll('.tab-c>div');
const Back3 = document.querySelectorAll('.back3>li');        
const Back4 = document.querySelectorAll('.back4>li');
const Back5 = document.querySelectorAll('.back5>li');
const FormationB = document.querySelector('.backS');

tabC_P.forEach((t,k) => {
    t.addEventListener('click',function(){ 
            for(y=0;y<3;y++){
                tabC_D[y].classList.remove('Blink');
            }
            if(k==0){
                Back3[0].style = "top: 12%; left: 25%;"
                Back3[1].style = "top: 12%; left: 50%; transform: translateX(-50%);"
                Back3[2].style = "top: 12%; right: 25%;"
                Back3[3].style = "top: 35%; left: 15%;"
                Back3[4].style = "top: 35%; left: 37%;"
                Back3[5].style = "top: 35%; right: 37%;"
                Back3[6].style = " bottom: 35%; right: 15%;"
                Back3[7].style = " bottom: 35%; left: 25%;"
                Back3[8].style = " bottom: 35%; left: 50%; transform: translateX(-50%);"
                Back3[9].style = " bottom: 35%; right: 25%;"
            }

            if(k==1){
                Back3[0].style = "top: 12%; left: 36%;"
                Back3[1].style = "top: 35%; right: 36%;"
                Back3[2].style = "top: 12%; right: 36%;"
                Back3[3].style = "top: 35%; left: 15%;"
                Back3[4].style = "top: 35%; left: 30%;"
                Back3[5].style = "top: 35%; right: 30%;"
                Back3[6].style = " bottom: 35%; right: 15%;"
                Back3[7].style = " bottom: 35%; left: 25%;"
                Back3[8].style = " bottom: 35%; left: 50%; transform: translateX(-50%);"
                Back3[9].style = " bottom: 35%; right: 25%;"
            }
                    if(k==2){
                        Back3[0].style = "top: 10%; left: 33%;"
                        Back3[1].style = "top: 24%; left: 50%; transform: translateX(-50%);"
                        Back3[2].style = "top: 10%; right: 33%;"
                        Back3[3].style = "top: 35%; left: 15%;"
                        Back3[4].style = "top: 40%; left: 37%;"
                        Back3[5].style = "top: 40%; right: 37%;"
                        Back3[6].style = " bottom: 35%; right: 15%;"
                        Back3[7].style = " bottom: 35%; left: 25%;"
                        Back3[8].style = " bottom: 35%; left: 50%; transform: translateX(-50%);"
                        Back3[9].style = " bottom: 35%; right: 25%;"
                    }
                    
                    if(k==3){
                        Back3[0].style = " top: 12%; left: 25%;"
                        Back3[1].style = " top: 12%; left: 50%; transform: translateX(-50%);"
                        Back3[2].style = " top: 12%; right: 25%;"
                        Back3[3].style = " top: 35%; left: 25%;"
                        Back3[4].style = " top: 35%; left: 50%; transform: translateX(-50%);"
                        Back3[5].style = " bottom: 35%; right: 37%;"
                        Back3[6].style = " top: 35%; right: 25%;"
                        Back3[7].style = " bottom: 35%; left: 15%;"
                        Back3[8].style = " bottom: 35%; left: 37%;"
                        Back3[9].style = " bottom: 35%; right: 15%;"
                    }
                    if(k==4){
                        Back3[0].style = " top: 12%; left: 35%;"
                        Back3[1].style = " top: 12%; left: 65%;"
                        Back3[2].style = " top: 35%; right: 37%;"
                        Back3[3].style = " top: 35%; left: 15%;"
                        Back3[4].style = " top: 35%; left: 37%;"
                        Back3[5].style = " bottom: 35%; right: 37%;"
                        Back3[6].style = " top: 35%; right: 15%;"
                        Back3[7].style = " bottom: 35%; left: 15%;"
                        Back3[8].style = " bottom: 35%; left: 37%;"
                        Back3[9].style = " bottom: 35%; right: 15%;"
                    }
                    if(k==5){
                        Back3[0].style = " top: 24%; left: 35%;"
                        Back3[1].style = " top: 12%; left: 50%; transform: translateX(-50%);"
                        Back3[2].style = " top: 24%; right: 35%;"
                        Back3[3].style = " top: 42%; left: 25%;"
                        Back3[4].style = " top: 42%; left: 50%; transform: translateX(-50%);"
                        Back3[5].style = " bottom: 35%; right: 37%;"
                        Back3[6].style = " top: 42%; right: 25%;"
                        Back3[7].style = " bottom: 35%; left: 15%;"
                        Back3[8].style = " bottom: 35%; left: 37%;"
                        Back3[9].style = " bottom: 35%; right: 15%;"
                    }
                    
                    if(k==6){
                        Back3[0].style = "top: 12%; left: 36%;"
                        Back3[1].style = "top: 35%; right: 36%;"
                        Back3[2].style = "top: 12%; right: 36%;"
                        Back3[3].style = "top: 60.5%; left: 16%;"
                        Back3[4].style = "top: 35%; left: 30%;"
                        Back3[5].style = "top: 35%; right: 30%;"
                        Back3[6].style = " top:60.5%; right: 15%;"
                        Back3[7].style = " bottom: 35%; left: 32%;"
                        Back3[8].style = " bottom: 35%; left: 50%; transform: translateX(-50%);"
                        Back3[9].style = " bottom: 35%; right: 32%;"
                    }

                    if(k==7){
                        Back3[0].style = "top: 12%; left: 50%; transform: translateX(-50%);"
                        Back3[1].style = "top: 35%; left: 40%;"
                        Back3[2].style = "top: 35%; right: 20%;"
                        Back3[3].style = "top: 60.5%; left: 16%;"
                        Back3[4].style = "top: 35%; left: 20%;"
                        Back3[5].style = "top: 35%; right: 40%;"
                        Back3[6].style = " top:60.5%; right: 15%;"
                        Back3[7].style = " bottom: 35%; left: 32%;"
                        Back3[8].style = " bottom: 35%; left: 50%; transform: translateX(-50%);"
                        Back3[9].style = " bottom: 35%; right: 32%;"
                    }
    });
})

FormationB.addEventListener('mouseover',function(){
    tabC_D.forEach((t,k) => {
        t.classList.add('Blink');
    })
});
