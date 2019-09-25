function log(value){
 console.log(value); 
}

function saludar(){
    console.log('helo'); 
   }


   function suma(x,y){
    return x+y 
   }
   function multiple(x,y){
    return x*y 
   }

// const log= function log(value){
//     console.log(value); 
//    }

//exportar un nom.
module.exports = {
    log,
    saludar,
    suma,
    multiple
}