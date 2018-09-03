import { Component } from "@angular/core";

@Component({
    selector: 'guardar-usuario',
    templateUrl: './guardar-usuario.component.html'
})

export class GuardarUsuarioComponent {
    title : String;

    constructor(){
        this.title = 'Guardar Usuario Component'
    }
}