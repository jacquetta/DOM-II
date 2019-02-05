// Your code goes here
let logo = document.querySelector('.logo-heading');
let link = document.querySelectorAll('.nav-link');
document.querySelector('img').id = 'busImg';
let headingTwo = document.querySelectorAll('h2');
let content = document.querySelector('.text-content');
let headingBack = document.getElementsByClassName('.main-navigation');
let headingFour = document.querySelectorAll('h4');
document.querySelector('.destination').id = 'update';
let button = document.querySelectorAll('.btn');
let body = document.querySelector('body');
document.querySelector('body').id = 'docBody';
document.querySelector('.footer').id = 'bottom';
document.querySelector('.intro').id = 'busHeader';
document.querySelector('input').id = 'select'

//load
window.addEventListener('load', event => {
    console.log('js.index loaded');
});


//preventDefault
document.querySelector('nav').id = 'navigation';
navigation.addEventListener('click', event => {
    event.preventDefault();
})
//focus

window.addEventListener("focus", event => {
    console.log("Document has focus");
});

//select
function selectFunc(){
    document.getElementById('select').select();
    alert('You selected the text')
}


// scroll

window.addEventListener('scroll', event => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        console.log('test');
    } 
});


// mouseover
logo.addEventListener('mouseover', event =>{
    logo.style.color = '#DB5461';
});

// dblclick
link[0].addEventListener('dblclick',function(event) {
    link[0].style.color = '#225136';
    link[0].style.backgroundColor = 'beige';
});

link[1].addEventListener('dblclick', function (event) {
    link[1].style.color = '#225136';
    link[1].style.backgroundColor = 'beige';
});

link[2].addEventListener('dblclick',function(event) {
    link[2].style.color = '#225136';
    link[2].style.backgroundColor = 'beige';
});

link[3].addEventListener('dblclick', function (event) {
    link[3].style.color = '#225136';
    link[3].style.backgroundColor = 'beige';
});

//keydown

body.addEventListener('keydown', event => {
    body.style.backgroundColor = '#20A39E';
    event.stopPropagation();
});

//wheel
document.getElementById('update').addEventListener('wheel', event => {
    update.style.backgroundColor = 'pink';
});


//resize
let count = 0;
window.addEventListener('resize', event => {
    let total = count += 1;
    console.log(total);
});


// drag and drop (move image to drag on top of adventure awaits image)
document.getElementsByTagName('IMG')[1].id = 'imgTravel';

function allowDrop(event){
    event.preventDefault();
}

function dragstart_handler(event){
    event.dataTransfer.setData('text', event.target.id);
}

document.getElementsByClassName('text-content')[0].id = 'dropDiv';
function drop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById('dropDiv'));
}

document.querySelector('h2').id = 'funBus';

