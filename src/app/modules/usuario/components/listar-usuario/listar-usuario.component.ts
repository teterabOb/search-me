import { Component } from "@angular/core";

@Component({
    selector: 'listar-usuario',
    templateUrl: './listar-usuario.component.html'
})

export class ListarUsuarioComponent {
    title : String;

    constructor(){
        this.title = 'Listar Usuario Component'
    }
}