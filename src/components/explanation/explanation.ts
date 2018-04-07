import { Component } from '@angular/core';
import { NavParams, ViewController} from "ionic-angular";

/**
a *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'explanation',
  templateUrl: 'explanation.html'
})
export class ExplanationComponent {

  explanationPages: any;
  constructor(private navCtrl: ViewController, public navParams: NavParams) {
    this.explanationPages = this.navParams.get("explanationPages");
  }

  closePage(){
    this.navCtrl.dismiss();
  }

}
