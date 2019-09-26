<?php
class Connection {
 public static function make($connection = 'mysql:host=127.0.0.1; dbname=tasks',
 $user = 'debian-sys-maint',
 $password = '097O08CCIK6awf9y') {
    try{
        $pdo = new PDO($connection,$user,$password);
    }catch (PDOException $e){
        die($e->getMessage());
    }

    return $pdo;
 }
}