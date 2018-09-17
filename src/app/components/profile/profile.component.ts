import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { UserService } from '../../services/user.service'
import { User } from '../../models/user'
import { Jsonp } from '@angular/http';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    providers: [UserService]
})
export class ProfileComponent implements OnInit {
    public title: String;
    public user: User;
    public identity;
    public token;
    public status: String;

    constructor(
        private _userService: UserService

    ) {
        this.title = 'Mi Perfil';
        this.identity = _userService.getIdentity();
        this.token = _userService.getToken();
        this.user = this.identity;
    }

    ngOnInit() {
        console.log('componente profile cargado')
    }

    onSubmit() {
        this._userService.updateUser(this.user).subscribe(
            response => {
                if (!response.user) {

                    this.status = 'error';

                } else {
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    this.status = 'success';
                }
            },
            error => {
                var errorMessage = <any>error;
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        )
    }



}