let numero =0;
function par_impar (numero){
    if(numero!=0){
        return numero%2===0 ? 'El número es par' : 'El número es impar';
    }else{
        return 'Ingrese un numero valido por favor!';
    }
}
console.log(par_impar(numero));