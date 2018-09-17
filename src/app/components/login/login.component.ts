import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { UserService } from '../../services/user.service'
import { User } from '../../models/user'


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    public title: String;
    public user: User;
    public identity;
    public token;
    public status: String;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        public _userService: UserService

    ) {
        this.title = 'Identificate';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    }

    ngOnInit() {
        
        console.log(this._userService.getIdentity())
        console.log(this._userService.getToken())
        
    }

    onSubmit() {
        //Logear al usuario y conseguir el objeto
        this._userService.signup(this.user).subscribe(
            response => {
                this.identity = response.issetUser;
                

                if (!this.identity || !this.identity._id) {
                    console.log('El usuario no se ha logeado correctamente')
                } else {
                    localStorage.setItem('identity', JSON.stringify(this.identity))

                    //Conseguir el token
                    this._userService.signup({ email: this.user.email, password: this.user.password, gettoken: true }).subscribe(
                        response => {
                            this.token = response.token;

                            if (!this.token) {
                                console.log('El token no se ha generado')
                            } else {
                                //Mostrar el token
                                //console.log(this.token)
                                localStorage.setItem('token', this.token)
                                this.status = 'success'

                                this._router.navigate(['/'])

                            }
                        },
                        error => {
                            console.log(<any>error)
                        }
                    )
                }
            },
            error => {
                var errorMessage=<any>error;
                if(errorMessage){
                    var body = JSON.parse(error._body);
                    this.status = 'error'
                }
            }
        )
    }

}