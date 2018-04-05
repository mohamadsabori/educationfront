import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello QuizestageComponent Component');
    this.text = 'Hello World';
  }

}
