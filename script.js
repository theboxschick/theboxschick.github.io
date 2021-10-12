
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let division1 = document.getElementById('division1');
let header = document.getElementById('header');
let trees = document.getElementById('trees');
let green = document.getElementById('green');
let clouds1 = document.getElementById('clouds1');

        window.addEventListener('scroll', function(){
        let value = window.scrollY;

        text.style.top = 130 + value * 0.3 + 'px';
        clouds1.style.top = value * -0.5 + 'px';
        bird1.style.top = value * -0.5 + 'px';
        bird1.style.left = value * 0.5 + 'px';
        bird2.style.top = value * -0.5 + 'px';
        bird2.style.left = value * -0.5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        rocks.style.top = value * -0.12 + 'px';
        green.style.top = value * 0.6 + 'px';
        header.style.top = value * 0.5 + 'px';
        trees.style.marginTop = value * -0.15 + 'px';   

        });

function toggle (){
    var trailer = document.querySelector(".trailer")
    trailer.classList.toggle("active")
}
            