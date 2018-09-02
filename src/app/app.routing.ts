import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'post', component: PostComponent },
    { path: '**', component: HomeComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);