import {Component} from '@angular/core';
import {UserprofileComponent} from "../userprofile/userprofile";
import {NavController} from "ionic-angular";
import {UserprofilePage} from "../../pages/userprofile/userprofile";

/**
 * Generated class for the SettingsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello SettingsComponent Component');
    this.text = 'Settings';
  }

  openUserProfile(){
    this.navCtrl.push(UserprofilePage);
  }

}
