//Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AdminRouterModule } from "./admin-routing.module"

//Import Components
import { MainAdminComponent } from "./components/main/main-admin.component";
import { AddAdminComponent } from "./components/add/add.component";
import { EditAdminComponent } from "./components/edit/edit.component";
import { ListAdminComponent } from "./components/list/list.component";

@NgModule({
    declarations: [
        MainAdminComponent,
        AddAdminComponent,
        EditAdminComponent,
        ListAdminComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRouterModule
    ]
})
export class AdminModule{}

