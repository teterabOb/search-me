import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { routing, appRoutingProviders } from './app.routing'

//Import Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { ModuloUsuarioModule } from './modules/usuario/modulo-usuario.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

//Import Modules
import { AdminModule} from './modules/admin/admin.module'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ModuloUsuarioModule,
    AdminModule,
    routing,
    FormsModule,
    HttpModule

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
