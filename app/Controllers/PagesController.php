<?php
class PagesController {
    //GESTIONARA TOTES LES UROL que comencin per
    // /tasks

    //CRUD -> CREATE RETRIEVE/LLISTAR UPDATE DELETE.


    // /tasks->mostrara la llista completa de tasques.

    // /task/{id}
    
    //POST /task/create TEMPORAL HTTP

    // /task/delete/{id}
    
    // / task/update/{id}



    public function about() {
        return view('about');
    }
    public function contact() {
        return view('contact');
    }
    public function policy() {
        return view('policy');
    }
}