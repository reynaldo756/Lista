
let num = 8;
var result;
var result_1 = 0;
var passo

for (passo = 1; passo < num; passo++  ){
    if(num % passo === 0){
        result = passo;
        result_1 = result_1 + result;
    }
}

console.log(result_1);