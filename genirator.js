'use strict';
function genirator() {
    let randomIntQuote = getRandomIntQuote(1, 12);
    let randomInt = getRandomInt(1, 6);
    console.log(randomInt);
    console.log( randomIntQuote);
    if (randomIntQuote===1) {
        document.getElementById('quote').innerHTML='Что разум человека может постигнуть и во что он может поверить, того он способен достичь'
    }
    if (randomIntQuote===2) {
        document.getElementById('quote').innerHTML='Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду.'
    }
    if (randomIntQuote===3) {
        document.getElementById('quote').innerHTML='Кто рано встает, тот потом пожалеет o своем решении.'
    }
    if (randomIntQuote===4) {
        document.getElementById('quote').innerHTML='Либо вы управляете вашим днем, либо день управляет вами.'
    }
    if (randomIntQuote===5) {
        document.getElementById('quote').innerHTML='Все дело в мыслях. Мысль — начало всего. И мыслями можно управлять. И поэтому главное дело совершенствования: работать над мыслями.'
    }
    if (randomIntQuote===6) {
        document.getElementById('quote').innerHTML='Лучше быть уверенным в хорошем результате, чем надеяться на отличный.'
    }
    if (randomIntQuote===7) {
        document.getElementById('quote').innerHTML='Начните оттуда, где вы сейчас находитесь. Используйте то, что у вас есть и делайте все, что можете.'
    }
    if (randomIntQuote===8) {
        document.getElementById('quote').innerHTML='Когда закрывается одна дверь к счастью, тут же открывается другая. Но мы часто так долго смотрим на первую, что не замечаем вторую.'
    }
    if (randomIntQuote===9) {
        document.getElementById('quote').innerHTML='Если нет ветра, беритесь за вёсла.'
    }
    if (randomIntQuote===10) {
        document.getElementById('quote').innerHTML='Мы становимся тем, о чем мы думаем..'
    }
    if (randomIntQuote===11) {
        document.getElementById('quote').innerHTML='Быстрее всего учишься в трех случаях — до 7 лет, на тренингах, и когда жизнь загнала тебя в угол.'
    }
    if (randomIntQuote===12) {
        document.getElementById('quote').innerHTML='Как можно быстрее превращайте ваши масштабные мысли в масштабные действия. Не позволяйте ложным отговоркам затормозить вас. Отговорки – симптомы страха.'
    }
    


    if (randomInt===1) {
        document.getElementById('imagen').src="images/1.png"
    }
    if (randomInt===2) {
        document.getElementById('imagen').src="images/2.png"
    }
    if (randomInt===3) {
        document.getElementById('imagen').src="images/3.png"
    }
    if (randomInt===4) {
        document.getElementById('imagen').src="images/4.png"
    }
    if (randomInt===5) {
        document.getElementById('imagen').src="images/5.png"
    }
    if (randomInt===6) {
        document.getElementById('imagen').src="images/6.png"
    }
}
function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomIntQuote(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


