import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-course',
  templateUrl: 'create-course.html',
})
export class CreateCoursePage {

  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    // imageUploadURL: '../assets'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCoursePage');
  }

}
