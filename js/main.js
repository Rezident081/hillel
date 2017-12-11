'use strict';

class LearningFrontend {
    constructor() {
        this.firstName = "Maxim";
        this.lastName  = "Kozachenko";
    }
    average(){
        let sum = 0,arr;
        arr = prompt("Введите числа").split(",");

        for(var i = 0; i < arr.length; i++){
            sum += Number(arr[i]);
        }

        sum = sum/arr.length;
        console.info("Среднее арифметическое = "+ parseInt(sum));
    }

    exchange(){
        let axchange = Number(prompt("Введите значения в долларах"));
        console.info("В "+ axchange +" долларах "+ axchange * 27 + " грн");
    }

    workPermit(){
        let access = false;
        const requirements = {};
        requirements.firstName = String(prompt("Введите ваше имя"));
        requirements.age = Number(prompt("Введите ваш возраст"));
        requirements.doYouSmoke = Boolean(confirm("Курите ли вы?"));
        requirements.expiarance = Number(prompt("Какой у вас опыт?"));

        if( requirements.age >= 18 && !requirements.doYouSmoke && requirements.expiarance > 5){
            access = true;
        }

        if(access){
            console.info("У нас для вас "+ requirements.firstName +" хорошая новость.Вы подходите!");
        }else{
            console.info("Мы вам перезвоним :)");
        }

    }

    isPalindrom(){
        let str, strReverse;
        str = String(prompt("Введите слово: "));
        strReverse = str.split('').reverse().join('');
        if(str == strReverse){
            console.log("Это слово палиндром!");
        }else{
            console.log("Это обычное слово!")
        }
    }
}

