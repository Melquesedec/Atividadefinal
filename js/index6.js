
var ativo1 = document.querySelector('.ativo1')
var ativo2 = document.querySelector('.ativo2')
var ativo3 = document.querySelector('.ativo3')
var ativo4 = document.querySelector('.ativo4')

var show0= document.querySelector('.show0')
var show1= document.querySelector('.show1')
var show2= document.querySelector('.show2')
var show3= document.querySelector('.show3')
var show4= document.querySelector('.show4')

ativo1.addEventListener('click', function(){
    show1.classList.remove('show1')
    show0.style.display='none'
    show2.classList.add('show2')
    show3.classList.add('show3')
    show4.classList.add('show4')
})
ativo2.addEventListener('click', function(){
    show2.classList.remove('show2')
    show0.style.display='none'
    show1.classList.add('show1')
    show3.classList.add('show3')
    show4.classList.add('show4')
})
ativo3.addEventListener('click', function(){
    show3.classList.remove('show3')
    show0.style.display='none'
    show2.classList.add('show2')
    show4.classList.add('show4')
    show1.classList.add('show1')
})
ativo4.addEventListener('click', function(){
    show4.classList.remove('show4')
    show0.style.display='none'
    show2.classList.add('show2')
    show3.classList.add('show3')
    show1.classList.add('show1')
})


let active = document.querySelectorAll('.active')
let active1 = document.querySelector('.active1')
let bords1 = document.querySelector('bords1')
let bords2 = document.querySelector('bords2')
let bords3 = document.querySelector('bords3')
let bords4 = document.querySelector('bords4')

ativo1.addEventListener('click', function(){
    ativo1.classList.add('active')
    ativo1.classList.remove('active')
    ativo2.classList.remove('active')
    ativo3.classList.remove('active')
    ativo4.classList.remove('active')
})
ativo2.addEventListener('click', function(){
    ativo2.classList.add('active')
    ativo1.classList.remove('active')
    ativo1.classList.remove('active')
    ativo3.classList.remove('active')
    ativo4.classList.remove('active')
})
ativo3.addEventListener('click', function(){
    ativo3.classList.add('active')
    ativo1.classList.remove('active')
    ativo1.classList.remove('active')
    ativo2.classList.remove('active')
    ativo4.classList.remove('active')
})
ativo4.addEventListener('click', function(){
    ativo4.classList.add('active')
    ativo1.classList.remove('active')
    ativo1.classList.remove('active')
    ativo3.classList.remove('active')
    ativo2.classList.remove('active')
})