

//import greeting from './templates/greeting'
//aixo defineix una dependencia!
import {task} from '../model'
//import { unlink } from 'fs'

//const greeting = `<h1> hola ${name}!</h1>`

const template = `
<h1>${task.name}</h1>
<ul>
    <li>Descripció: ${task.description}</li>
    <li>Completada: ${task.completed}</li>
 </ul>   
`
//document.body.innerHTML = template
export { template }



