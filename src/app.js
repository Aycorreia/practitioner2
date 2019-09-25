import helpers from '../helpers.js'
//tambe altenativament. importar variables individual.
//import {suma,log,saluda} from '../helpers.js'
//cridar llavors es nmes const resultat=suma(1,2)

//import greeting from './templates/greeting'
//aixo defineix una dependencia!
import { template } from './templates/task'

//const greeting = `<h1> hola ${name}!</h1>`

document.body.innerHTML = template

helpers.log('prova')
helpers.saludar()
const resultat = helpers.suma(1,2)
console.log(resultat)

