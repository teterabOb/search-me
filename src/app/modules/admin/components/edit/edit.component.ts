import { Component } from '@angular/core';

@Component({
  selector: 'edit-admin',
  templateUrl: './edit.component.html',

})
export class EditAdminComponent {
  title : String;

  constructor(){
      this.title = "Edit Admin Module"
  }
}
