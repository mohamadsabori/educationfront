import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WebIntent} from "@ionic-native/web-intent";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private webIntent: WebIntent) {
    const options = {
      action: this.webIntent.ACTION_VIEW,
      url: 'path/to/file',
      type: 'application/vnd.android.package-archive'
    };
  }
}
