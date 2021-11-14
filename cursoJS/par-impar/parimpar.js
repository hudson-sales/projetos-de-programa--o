let n = 2;
let num = verificador(n);
console.log(num);
function verificador(n){
    if(n % 2 == 0){
        return 'Par';
    }else{
        return 'Impar'
    }
}