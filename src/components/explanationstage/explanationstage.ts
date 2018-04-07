import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {ExplanationComponent} from "../explanation/explanation";


/**
 * Generated class for the ExplanationstageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'explanationstage',
  templateUrl: 'explanationstage.html'
})
export class ExplanationstageComponent {

  @Input() values: any;

  constructor(private navCtrl: NavController) {
  }

  showExplanationDetails() {
    this.navCtrl.push(ExplanationComponent, {explanationPages: this.values.explanationPages});
  }

}
