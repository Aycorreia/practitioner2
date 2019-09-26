<?php
class TasksController {
    //GESTIONARA TOTES LES UROL que comencin per
    // /tasks

    //CRUD -> CREATE RETRIEVE/LLISTAR UPDATE DELETE.


    // /tasks->mostrara la llista completa de tasques.

    // /task/{id}
    
    //POST /task/create TEMPORAL HTTP

    // /task/delete/{id}
    
    // / task/update/{id}



    public function list() {
        //TODO LIST TASKS
        //TOTS ELS TEMES COMUNS VAN FORA
        $tasks = Task::all();
        return view('tasks',$tasks);


    }
    public function show() {
        //TODO LIST ONE TASK
        $task = Task::find($id);
        return view('tasks',$task);
    }
    public function update() {
        //TODO
    }
    public function delete() {
       //TODO 
    }
}