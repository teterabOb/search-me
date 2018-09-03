import { Component } from '@angular/core';

@Component({
  selector: 'list-admin',
  templateUrl: './list.component.html',

})
export class ListAdminComponent {
  title : String;

  numbers = new Array(10);

  constructor(){
      this.title = "List Admin Module"
  }
}
