let a=10;
let b=5;
let c=15;
function findMax(){
    if(a ? b : c){
        return a;
    }
    return c;
}
console.log(findMax());