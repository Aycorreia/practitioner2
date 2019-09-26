<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>


    <h1><?= //$task ['name']
        $task->name ?></h1>
    <ul>
        <li>Descripcio: <?= //$task ['description'] 
        $task->description ?></li>
        <li>Completada: 
            
        <?= //$task['completed'] ? 'Si' : 'No';
        $task->completed ? 'Si' : 'No' ?>

        </li>
    </ul>

</body>
</html>