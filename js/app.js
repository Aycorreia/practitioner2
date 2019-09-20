//console.log('Hola mon')

//chibatar lo que fa aquesta cosa!
//document lo que fa es carregar el document html per a modificarlo en js?
console.log(document);

console.log(document.body);

//carrega la pagina i inserta la linea!
//aixo es obsolet sin embargo.
///document.body.innerHTML ='<h1> Heyyy!!! </h1>'
//// Aixo carrega lo H1 i lo reemplaca!
// lo que se te que fer es two way. Aquest metode es obsolet perque requereix que el programa carregue
//el resultat a la vista. El two way, segons he entes, es que el javascript carregue el codi automaticament
// a la vista mentre el usuari lo usa. No se.

const name = 'Ayr'

//claudators!! no parenteisis
//const template = `<h1>${name}!</h1>`
//importem aixo desde altre fitxer.

//es separen les plantilles.
//control shift 7 per a comentar normal. A per a comentar en bloc
//cntr + e per a buscar archius i fitxers al code.

//per a indicar moduls propis cal fer / per a tot el path, o . per a relatius.
import greeting from '.js/templates/greeting.js'

console.log(greeting);


document.body.innerHTML = template

//gestor de depencencies! sino cal importarles tot al document...

//npm es un gestor. tambe esta yarn.
//si es vol usar bable, can instalar una dependencia..-

//nodemodules (js) no es toca mai sense saber lo que es fa! vendor per a php.
// son les dependencies!
// sol si peta el programa de altre, si lo teu el peta.
// pero es pot borrar. sempre que es pugi fer el npm per instalarlo altra vegada.
//pacaje-loc tambe lo mateix.

//manifest definira el nom i dependencies del projecte.

//import i export



