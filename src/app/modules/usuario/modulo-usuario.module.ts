//Importar los modulos necesarios para generar un modulo
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GuardarUsuarioComponent } from './components/guardar-usuario/guardar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { MainUsuarioComponent } from './components/main-usuario/main-usuario.component';

//Importar componentes


//Decorar NgModule para cargar los componentes y la configuracion de modulos
@NgModule({
    imports: [CommonModule],
    declarations: 
        [   
            GuardarUsuarioComponent,
            ListarUsuarioComponent,
            MainUsuarioComponent        
        ],
    exports: [MainUsuarioComponent]
})

export class ModuloUsuarioModule { }
