'use strict';

class LearningFrontend {

    static average(){
        let sum = 0;
        const arr = [2,4,5,12,23];

        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }

        sum = Number(sum/arr.length);

        return sum;
    }

    static exchange(){
        const axchange = 100;

        return ("В "+ axchange +" долларах "+ axchange * 27 + " грн");
    }

    static workPermit(){
        let access = false;
        const employeInfo = {
            firstName  : "Alex",
            age        : 33,
            doYouSmoke : false,
            expiarance : 6
        };

        if( employeInfo.age >= 18 && !employeInfo.doYouSmoke && employeInfo.expiarance > 5){
            access = true;
        }

        if(access){
            return ("У нас для вас "+ employeInfo.firstName +" хорошая новость.Вы подходите!");
        }

        return ("Мы вам перезвоним :)");
    }

    static isPalindrom(){
        const str = "lol";
        const strReverse = str.split('').reverse().join('');
        let result = str === strReverse ? "Это слово палиндром!" : "Это обычное слово!";

        return result;
    }

    static addOneIntoArray(){
        let firstArr = [55,234,22,123,654];
        let secondArr = firstArr.map(function(value){
            return value+1;
        });

        return secondArr;
    }

    static returnIteration(num){
        let i = num = num || 0;
        let count = 0;
        return {
            iterateMethod : () => {
                return i++, count++;
            },
            iterateCount : () => {
                return "Счетчик начался с "+ num +", всего было произведенно итераций "+ count +" раз";
            }
        };
    }

    static transformToNumber(subj){
        subj = isNaN(subj) ? true : subj;

        return Number(subj);
    }
}

