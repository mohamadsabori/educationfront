import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuizPageComponent} from "../../components/quiz-page/quiz-page";
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  courseData : any;
  constructor(public navCtrl: NavController, private _service: DataProvider) {
    this._service.getUserPlan().subscribe(data => {
        this.courseData = data.json().response.courseStageList;
      }
      , error2 => {
        console.log(error2);
      }
    );

  }

  ionViewDidLoad() {

  }

  sayHello() {
    this.navCtrl.push(QuizPageComponent);

  }
}
