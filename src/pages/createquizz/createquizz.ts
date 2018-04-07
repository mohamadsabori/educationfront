import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuizModel} from "../../model/QuizModel";
import {QuestionOption} from "../../model/QuestionOption";

/**
 * Generated class for the CreatequizzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createquizz',
  templateUrl: 'createquizz.html',
})
export class CreatequizzPage {
  quize: QuizModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.quize = new QuizModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatequizzPage');
  }

  selectAnswer(selectedAnswer: QuestionOption){
    this.quize.answer = selectedAnswer;
  }

  addAnswer(){
    this.quize.questionOptions.push(new QuestionOption);
  }

}
