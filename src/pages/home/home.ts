import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuizPageComponent} from "../../components/quiz-page/quiz-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() { }
  sayHello() {
    this.navCtrl.push(QuizPageComponent);
    console.log('Hello');
  }
}
