import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {QuizeComponent} from "../quize/quize";

/**
 * Generated class for the QuizestageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quizestage',
  templateUrl: 'quizestage.html'
})
export class QuizestageComponent {

  @Input() values: any;

  constructor(private _navCtrl: NavController) {

  }

  openQuize() {
    console.log(this.values);
    this._navCtrl.push(QuizeComponent, {'quizes': this.values.questions});
  }

}
