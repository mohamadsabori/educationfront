import {Component, ViewChild} from '@angular/core';
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'quiz-page',
  templateUrl: 'quiz-page.html'
})
export class QuizPageComponent {

  @ViewChild('slides') slides: any;

  slideOptions: any;
  flashCardFlipped: boolean = false;

  constructor(public dataService: DataProvider) {

  }

  selectAnswer(){
    this.flashCardFlipped = true;
  }
}
