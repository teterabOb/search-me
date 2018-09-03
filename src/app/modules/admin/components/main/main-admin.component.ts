import { Component } from '@angular/core';

@Component({
  selector: 'main-admin',
  templateUrl: './main-admin.component.html',

})
export class MainAdminComponent {
  title : String;

  constructor(){
      this.title = "Main Admin Module"
  }
}
