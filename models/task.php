<?php
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
