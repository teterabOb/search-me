import { Component } from "@angular/core";

@Component({
    selector: 'main-usuario',
    templateUrl: './main-usuario.component.html'
})

export class MainUsuarioComponent {
    title : String;

    constructor(){
        this.title = 'Main Usuario Modulo'
    }
}