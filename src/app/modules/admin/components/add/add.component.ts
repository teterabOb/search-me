import { Component } from '@angular/core';

@Component({
  selector: 'add-admin',
  templateUrl: './add.component.html',

})
export class AddAdminComponent {
  title : String;

  constructor(){
      this.title = "Add Admin Module"
  }
}
