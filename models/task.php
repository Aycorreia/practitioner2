<?php

//Connection::make();


$query = new QueryBuilder(Connection::make());
$results = $query->selectAll('tasks');


$task = $results[0];

