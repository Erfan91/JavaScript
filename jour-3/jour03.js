var fruits = ['mango', 'lemon', 'blueberry'];
console.log(fruits);
console.table(fruits);

// 02 access
var ingredients = ['eggs', 'milk', 'butter'];
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter')); 


//03 add remove
var obje = ['pen', 'book', 'lamp'];
 obje.unshift("chair")

obje.pop()
obje.shift()
console.log(obje);
console.table(obje);

// 04 order
 var numbers = [4,10,8, 12, 6];
 numbers.reverse();
 console.log(numbers);
 numbers.sort((a,b)=>a-b);
 console.log(numbers);

 //05 Boucle
 var total  = 0;
 var limit = 10;
 for(var i = 0; i<= limit;i++){
    total = total + i;
    console.log(total[i])
 }

 console.log(total);
// 06 reverse
 var sentence = "Hello Konexio";

for(var i = sentence.length -1; i>=0; i--){
    console.log(sentence[i]);
};

// Bonus
for (var i=0; i<=100; i++){
    if (i *= 3){
        console.log('fizz');
    }else if(i *= 5){
        console.log('buzz');
    } else if(i *= 7){
        continue
    } else{
        console.log(i);
    }
}



// Bonus2
var total  = 0;
 var limit = 10;
while(total<=limit){
    total = total + 1;
    console.log(total);
}

// 03 Bonus
var tableau = ['erfan', 'naim', 'shamsudin', 'al'];
 var tb = tableau[Math.floor(Math.random() * tableau.length)];
 console.log(tb)

 // 04 Bonus
 var empty = [];

 for (var i = 0; i<=19;i++){
     
    var rand = Math.floor(Math.random() * 100);
    empty.push(rand);

 }
 console.log(empty);

var largest = 0;
for(var i = 0;i<empty.length;i++){
    if (largest<empty[i]){
        largest=empty[i];
    }
}
console.log(largest);
