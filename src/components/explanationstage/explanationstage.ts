import {Component, Input} from '@angular/core';

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

  constructor() {
  }

  showExplanationDetails(){
    console.log(this.values);
  }

}
