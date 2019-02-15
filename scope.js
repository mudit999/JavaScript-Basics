let a='first';                       //Global Scope

function scopeBasis(){
    console.log(a);
 let b='second';                     //Local Scope
}

scopeBasis();

function scopeBasis2(){
    console.log(b);
}
scopeBasis2();
