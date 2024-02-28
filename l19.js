'use strict';
 
// let a = ['hello',123,true,'true',[12,555,526,789]];
// let b = [000,111,222,333,444,555,666,777,888,999];
// console.log(a);
// console.log(a[4]);
// console.log(a.length);
// console.log(a[a.length-1]);
// console.log(b.toString());
// console.log(b);

// let c =[223,'asdfghjhgfdsdfg',12345678,'sbhbvftyhvdrtyhvw'];
// let d =[345,'bye',678];
// console.log(c.toString());
// console.log(c.join('-'));
// console.log(c.push(12232));
// console.log(c);
// console.log(c.pop());
// console.log(c)
// console.log(c.shift());
// console.log(c);
// console.log(c.unshift('hello'));
// console.log(c);
// console.log(c.concat(d));
// console.log(c);
//  console.log(c.splice(0,1,));
//  console.log(c);
//  console.log(c.slice(3));
//  console.log(c);
// let t =[1,5,9,0,2,4,7,]
// let r =['banana','aplle','kivi','strowbery','orange'];
// console.log(c.sort());
// console.log(c.reverse());
// console.log(r.indexOf('aplle'));
// let o =5;
// let p ='hello';
// console.log(typeof(p));

// length-вычесляет длину массива (количество элементов)
// toString-преоброзует массив в строку значений, разделенных запятыми
// join-преоброзует массив в строку значений, разделенных тем контентом который укаежм
// pop-удоляет последний элемент массива
// push-доовляет элемент в коненц массива
// shift-удоляет первый элемент массива
// unshift-добовляет элемент в начало массива
// concat-создает новый массив путем объеденения сушествующих
// splice-добовляет новые элементы и моет удолить старые элементы после добавленых
// slice-удоляет часть массива до указеного элемента
// sort-сортирует элементы масива по алфовиту (строки) и по порядку (числа) сначало числа потом буквы (строки и числа)
// reverse переворачивает массив задом на перёд
// indexOf вычесляет индекс элемента
// typeof показывает какой тип данны лежит в переменной
// Array.isArray проверка на массив

// объекты

let a =['aplle', 'orange','fox','vscode'];
let b ={
    581: 'monday',
    102: 'tuesday',
    673: 'wednesday',
    904: 'thursday'
};
console.log(b[673]);
console.log(a[1]);
let date ={
    day: '17.',
    mounth: '10.',
    ear: '2023.'
}
console.log(date.day+date.mounth+date.ear);
let math ={
    x:75,
    y:92,
    z:28
}
console.log(math.x**math.y/math.z);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(date.day));
// console.log(typeof(math.x));
console.log(Array.isArray(b));

let avar = 10;

    console.log(avar);
    console.log(`My variable avar = ${avar}`);
    console.log(`My variable avar = avar`);
    console.log(`My variable avar =`, avar);