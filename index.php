<?php

//Aquest es el fixer controlador

// ARRAYS / VECTORS 

// FUNCIONS GLOBALS / HELPERS
require 'helpers.php';

//dump();
//dd();

/* require 'Task.php';

require 'database/Connection.php';

require 'database/QueryBuilder.php'; */

require 'vendor/autoload.php';

//model
require 'models/task.php';
//dd($task);
//dump($task);
//arrays associatius
//una llista
//objecte

//$name = 'Ayr';



//normalment se necesitaria un controlador en poques linees.
//require 'model.php'

//include i require son peero require peta si el fitxer no existeis. Include no peta.

//var_dump($task);

//VISTA

require 'index.template.php';

// SOLID -> S O L I D
// O -> Open-Closed -> Open to Extension to Modification






//front controller fc


