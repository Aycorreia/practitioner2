<?php

//dry -dont repeat yourself vs wet -write everything twice
function dump($var){
    echo '<pre>';
    die(var_dump($var));
    echo '</pre>';
}
/* function dd ($var){
    echo '<pre>';
    die(var_dump($var));
    echo '</pre>';
} */
function dd ($var){
    die(dump($var));
}