import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

/**
 * Generated class for the QuizeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quize',
  templateUrl: 'quize.html'
})
export class QuizeComponent {

  quizes: any;
  flashCardFlipped: boolean = false;

  constructor(private navCtrl: ViewController, public navParams: NavParams) {
    this.quizes = this.navParams.get("quizes");
    console.log(this.quizes);
  }

  closePage(){
    this.navCtrl.dismiss();
  }

  selectAnswer(quize: any){
    quize.flashCardFlipped = true;
  }
}
