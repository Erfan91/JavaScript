var integer = 102;
var float = 13.9;

console.log(integer, float)
//02 convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified);

// 03 round
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded)

// 04 Arithmétique
 var test = 12;
 var bis = 5;
 console.log(test + bis);
 console.log(test * bis);
 console.log(test ** bis);
 console.log(test - bis);
 console.log(test % bis);
 console.log(test / bis);
 
 //05 comparison
 var test = 143;
 var bis = 219;
 console.log(test < bis);
 console.log(test > bis);
 console.log(test || bis);
 console.log(test != bis);
 console.log(test !== bis);
 console.log(test === bis);

 // 06 condition
 var limit = 50;
 var score = 64;
 score<limit ? console.log('ok good') : console.log('oh no');
 
 //07 condition
 var password = "azerty";
 if (password.length >= 5){
     console.log('The password is secure');
 } else{
     console.log('not secure');
 }


 //08 condition III
 if (password.length = 5 && score<limit == true){
     console.log('Everything is good');
 }else if(password.length = 5 == true ||  score<limit != true){
    console.log('something is good');
 } else{
    console.log("nothing is good")
 }

 
var random = 109486;
if (random >=6){
    console.log('Yes i win');
}else{
    console.log('so close');
}

var month = "winter";
switch (month){
case 'winter':
    console.log("its cold");
    break
case 'fall':
    console.log('its windy outside');
    break
case 'spring':
    console.log('its nice to be outside');
    break
case 'summer':
    console.log('its pool time')
    break
 

}

var roundNumber = 3.6;
if (roundNumber < 3){
    roundNumber = Math.floor(3.6)
    console.log(roundNumber);
}else if (roundNumber >= 3){
    roundNumber = Math.ceil(3.6);
    console.log(roundNumber);
}


rN = roundNumber.toString();
console.log(rN);