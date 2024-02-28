// let a = document.getElementById('first').innerHTML="hello";
// let b = document.getElementsByName('language')
// let c = document.getElementsByTagName('h1')
// let d = document.getElementsByClassName('text1')
// let e = document.querySelector('.text1')
// let f = document.querySelector('p.example').style.color='blue'
// let g = document.querySelector('h2.example').style.color='blue'
// let h = document.querySelector('li')[1].style.color='red'
// document.querySelector('button').classList.toggle('btn')-проверка на класс если указанный класс есть то он удоляется если его нет то он дбовляеься
// document.querySelector('button').classList.add('btn')-добовляет класс элементу
// document.querySelector('button').classList.remove('btn')-удоляет класс
// document.querySelector('h1').textContent-пзволяет получать или задавать только текстовое содеримое
// document.querySelector('h1').innerHTML-нужно для получения или замены всего содержимого элемента
// document.querySelector('a').attributes;-показывает сколько атрибутов в элементе
// document.querySelector('button').classList-показывает сколько клаccов в элементе
//document.querySelector('a').getAttribute('href');-показывает содержимое атрибута
//document.querySelector('a').setAttribute('href','https://www.youtube.com/');-заменяет содержимое атрибута , добавляет атрибут
//document.querySelector('a').hasAttribute('href');-проверяет наличее атрибута
//document.querySelector('a').removeAttribute('href');-удоляет атрибут

// document.querySelector('h1').innerHTML='чудеса света'
// document.querySelector('#first').textContent='Колосс Родосский'
// document.querySelector('body').style.backgroundColor='blue'
// document.querySelector('h1').style.fontFamily='Franklin Gothic Medium'

// let a= document.createElement('p');
// a.id='p1';
// a.innerHTML="hi"
// document.body.appendChild(a);

// let addLi = document.createElement('li');
// addLi.id='sixth'
// addLi.innerHTML='колос'
// document.getElementById('infolist').appendChild(addLi)

// let deleteElement = document.querySelector('h1')
// document.body.removeChild(deleteElement)

// let addLi = document.createElement('li');-создает элемент
// document.getElementById('infolist').appendChild(addLi)-добовляет созданный элемент в указанное место
// document.body.removeChild(deleteElement)-удоляет элемент из указанного места

//события

// let clickButton = document.getElementById('clicker');
// function onButtonClick() {
//     clickButton.style.color='red';
//     clickButton.style.backgroundColor='blue'
//     clickButton.textContent='doble click my'
// }
// clickButton.onclick=onButtonClick
// function onDobleClick() {
//     clickButton.style.color='black';
//     clickButton.style.backgroundColor='white'
//     clickButton.textContent='click my'
// }
// clickButton.ondblclick=onDobleClick



// // addEventListener-прикрепляет обработчик событея к элементу\


// function getPusher() {
//    document.getElementById('pusher').innerHTML='push my'
// }
// function deletePusher() {
//     document.getElementById('pusher').innerHTML=''
// }
// function getDoblePusher() {
//     document.getElementById('doblePusher').innerHTML='don t push my'
// }
// function deleteDoblePusher() {
//     document.getElementById('doblePusher').innerHTML=''
// }


// function mouseDown() {
//     document.getElementById('click').style.color='green'
// }
// function mouseUp() {
//     document.getElementById('click').style.color='brown'
// }


// function key() {
//     document.getElementById('tText').style.backgroundColor='brown'
// }

// function keyP() {
//    alert('you push the button') 
// }

// function onFocusFunc() {
//     document. getElementById('wrText').style.backgroundColor='red'
// }

function onSelFunc() {
    alert('i am robot')
}