'use strict';
//function

// let a =1
// while (a<=5) {
//     console.log(a);
//     a++
// }

// let i = 1
// function func () {
//     while (i<=5) {
//      console.log(i);
//      i++
//      }
// }

// func();
// func();
// func();

// function func1 (nam1,nam2) {
//     console.log(nam1+nam2);
// }
// // func1(12,38)
// let perem1 =12
// let perem2 =45
// func1(perem1,perem2)

// function func2(nam1=5) {
//     console.log(nam1);
// }
// func2(12);

// function func3(age='?') {
//     console.log(age);
// }
// func3(9);
// func3(0);
// func3(35);

// function func4(nam1) {
//     console.log(nam1*nam1);
//    return nam1*nam1
//    if (nam1===5) {
//     return 'true'
//    }else{
//     return 'false'
//    }
// }
// func4(3)
// console.log(func4(5));

// function addSquare(a,b) {
//     function square(x) {
//         return x*x
//     }
//     return square(a)+ square(b) 
// }
// let rezalt = addSquare(2,9)
// console.log(rezalt);

// function A(x) {
//     function B (y) {
//         function C (z) {
//             console.log(x+y+z);
//         }
//         C(3)
//     }
//     B(7)
// }
// A(1)

// function kulk(a,b) {
//    return a+b
// }
// let rezalt = kulk(47,54)
// console.log(rezalt);

// function number() {
//     let a;
//     return a ='привет я миша как у тебя дела'
//     a=6;
//     return a;
// }
// console.log(number());

// function mesage(mesage1,mesage2) {
//     return mesage1+' '+'нет'+' '+mesage2
// }
// let rezalt =mesage('привет','пока')
// console.log(rezalt);

// function first() {
//     setTimeout(function(){
//         console.log(1);
//     },-10000);
// }
// function sekond() {
//     console.log(2);
// }
// first()
// sekond()

//Function declaration-obyavlenie funkcii
    //Function Expression-funkcionalnoe virogenie. tolko funkcionalnie virogeniya mogut bit ananimnimi a obyavlenie funkcii vsegda dolgno imet ima

    
    // let aFunc = function (name) {
    //  console.log('hi',name);
    // }
    // aFunc('misha')
    

// function mesage() {
//     console.log('hello');
// }
// mesage()

//Callback-eto functiya,kotoroya peredayotsya v kachestve  argumenta drugoy functii.
//etot metod pozvolaet functii vizivat druguyu functiyu.
//functiya obratnogo vizova moget vipolnatsa tolko posle zaversheniya drugoy functii

// function ask(question,yes,no) {
//     if (confirm(question)) yes(); 
//     else no();
        
    
// }
// function showYes(){
// alert('вы согласны')
// }

// function showNo(){
//     alert('вы не согласны')
// }
// ask('вы принимаете условия?',showYes,showNo)

// function ask(question,yes,no) {
//         if (confirm(question)) yes(); 
//          else no();
// }
// ask(
//     'вы принимаете условия?',
//     function () {
//         alert('вы согласны')
//     },
//     function () {
//         alert('вы не согласны')
//     }
// )

//zamikaniye-eto funtiya kotoraya zapominayet svoi vneshniye perimenniye i moget poluchit k nim  dostup
  
// function mesage() {
//     let name = 'миша';
//     function displayMesage() {
//         return 'hi'+ ' ' + name;
//     }
//     return displayMesage()
// }
//  console.log(mesage());
// let m1 = mesage();
//console.log(m1());

// let myFunc = (arg1, agr2...argN)=>{
//     тело функци 
// }

// let a = function (x,y,z) {
//     return x*y*z
// }
// a(10,5,11);

// let a = (x,y,z)=>{
//     console.log(x*y*z);
// }
// a(2,2,2)
// let a =(x,y,z)=>x*y*z;
// a(10,10,10);

// let mesage =(word1, name1, word2)=>{
// console.log(word1+' '+name1+' '+word2);
// }
// mesage('hi,','misha,','how can i help you?');

// let age = 18
// let welcome =(age<18)?
// ()=>console.log('проход запрещен'):
// ()=>console.log('проход разрешен');
// welcome()

// рекурсия это вызов самого себя функция которая вызывает саму себе яляется рекурсивной

// function countDown (nam){
//     console.log(nam);
//     const newNam = nam-1;
//     if (newNam>0) {
//         countDown(newNam)
//     }
// }
// countDown(100)

// function mesage () {
//     console.log('hello');
// }
// setTimeout(mesage,3000)

// function mesage () {
//         console.log('hi how are you');
// }
// setInterval(
//     mesage,3000
// )

function mesage (name,lastname) {
    console.log('hello'+' '+name+' '+lastname);
}
setTimeout(mesage,2000,'misha','mihailovich')
