import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
 
//Import Components
import { MainAdminComponent } from "./components/main/main-admin.component";
import { AddAdminComponent } from "./components/add/add.component";
import { EditAdminComponent } from "./components/edit/edit.component";
import { ListAdminComponent } from "./components/list/list.component";

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainAdminComponent,
        children: [
            { path: '', component: ListAdminComponent, pathMatch: 'full' },
            { path: 'add', component: AddAdminComponent },
            { path: 'edit', component: EditAdminComponent },
            { path: 'list', component: ListAdminComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
}) 
export class AdminRouterModule{}