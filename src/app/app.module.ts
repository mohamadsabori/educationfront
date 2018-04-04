import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {WebIntent} from "@ionic-native/web-intent";
import {ProgressBarComponent} from "../component/ProgressBar";
import {CurvedLineComponent} from "../components/curved-line/curved-line";
import {RighttodownComponent} from "../components/righttodown/righttodown";
import {UptorightComponent} from "../components/uptoright/uptoright";
import {LefttodownComponent} from "../components/lefttodown/lefttodown";
import {UptoleftComponent} from "../components/uptoleft/uptoleft";
import {DataProvider} from '../providers/data/data';
import {FlashCardComponent} from '../components/flash-card/flash-card';
import {QuizPageComponent} from "../components/quiz-page/quiz-page";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
// Import Froala Editor.
import "froala-editor/js/froala_editor.pkgd.min.js";
import {CreateCoursePage} from "../pages/create-course/create-course";
import {RegisterPage} from "../pages/register/register";
import {ActivationPage} from "../pages/activation/activation";
import {UserprofileComponent} from "../components/userprofile/userprofile";
import {SettingsComponent} from "../components/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgressBarComponent,
    CurvedLineComponent,
    RighttodownComponent,
    UptorightComponent,
    LefttodownComponent,
    UptoleftComponent,
    FlashCardComponent,
    QuizPageComponent,
    CreateCoursePage,
    RegisterPage,
    ActivationPage,
    UserprofileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CurvedLineComponent,
    RighttodownComponent,
    UptorightComponent,
    LefttodownComponent,
    UptoleftComponent,
    FlashCardComponent,
    QuizPageComponent,
    CreateCoursePage,
    RegisterPage,
    ActivationPage,
    UserprofileComponent,
    SettingsComponent

  ],
  providers: [
    WebIntent,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {
}
