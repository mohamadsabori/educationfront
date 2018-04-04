import { Component } from '@angular/core';

/**
 * Generated class for the UserprofileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'userprofile',
  templateUrl: 'userprofile.html'
})
export class UserprofileComponent {

  text: string;

  constructor() {
    console.log('Hello UserprofileComponent Component');
    this.text = 'Hello World';
  }

}
