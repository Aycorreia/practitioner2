<?php
/* ///Testos, dummies. Alternatives als arrays associatius
//poden tindre setters i getters. Pero no fan res, sol controlar.

// class Car {
//     //Constructor
//     //no hi ha obligacio de fer constructor a una classe.
//     //public __construct(){
//     //}

//     /// DYNAMIC TYPING

//     // visibilitat -> API
//     public $model;
//     private $marca;
    
//     //en php no hi ha sobrecarrega, no es poden ficar funcions en el mateix nom!
//     //llavors si es vol que es pugue passar sense marca, donar un valor per deffecte.
//     //$car = new Car($model); el usuari ficara model pero marca sempre sira hyundai.
//     //$car = new Car($model,$marca); pots ficar el model i la marca manual.
//     //$car = new Car(); o tot per defecte

//     public function __construct($model='',$marca = 'Hyundai'){

//     }
//     public static function saluda(){
//         echo "hola";
//     }

//     // //aixo permeteix ficar un numero de arguments com es vulgui
//     // public function suma(...$arguments){

//     // }

//     // functions -> metodes
//     public function setModel() {
//         $this->model = $model;
//     }
//     public function start() {
//         //aqui s'arranca
        
//     }
//     private function concatenar() {
        
//     }
// // en cas de duda tot protected. despres mirar public
// }
// //cridar la funcio statica.
// //Car::prova();
// //Car::saluda();
// //Helpers::dd;



// //no solament inicialitza, sino tambe de quines coses depen.
// //oco al cambiar...?
// $car = new Car();
// $car = new Car($model);
// $car = new Car($model,$marca);

// $car->model ='I20';
// $car->marca ='hyundai';

// class Task {
//     public $name;
//     public $description;
//     public $completed;
// }


try{
    $pdo = new PDO('mysql:host=127.0.0.1; dbname=tasks', 'debian-sys-maint','097O08CCIK6awf9y');
}catch (PDOException $e){
    die($e->getMessage());
};
//die(var_dump($pdo));
$query = $pdo->prepare('SELECT * FROM tasks');

$query ->execute();


//$results = $query->fetchAll(PDO::FETCH_OBJ);
$results = $query->fetchAll();
// die(var_dump($results));

//no tocar.
//die(var_dump($results[0]->name));


$task = $results[0];






//$task = 

// $task = [
//     'name' => 'Comprar llet',
//     'descripcio' => 'Al lidl...',
//     'completed' => true,
// ];
////////////////////////////////////////////////2

////////////////77
<?php

// require 'Task.php';

// Connection connection()
// $connection = new Connection;
// $connection ->make();
Connection::make();



// try{
//     $pdo = new PDO('mysql:host=127.0.0.1; dbname=tasks', 'debian-sys-maint','097O08CCIK6awf9y');
// }catch (PDOException $e){
//     die($e->getMessage());
// }
// //die(var_dump($pdo));

//$pdo = Connection::make();

//$query = new QueryBuilder($pdo);

$query = new QueryBuilder(Connection::make());
$results = $query->selectAll('tasks');


// $query = $pdo->prepare('SELECT * FROM tasks');

// $query ->execute();


//$results = $query->fetchAll(PDO::FETCH_OBJ);
// $results = $query->fetchAll();
// $results= $query->fetchAll(PDO::FETCH_CLASS, 'Task');
// die(var_dump($results));

//no tocar.
//die(var_dump($results[0]->name));


$task = $results[0];


// dd($results[0]);





//$task = 

// $task = [
//     'name' => 'Comprar llet',
//     'descripcio' => 'Al lidl...',
//     'completed' => true,
// ];

////////////////////////////////////////////////3 
































*/