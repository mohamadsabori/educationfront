import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatequizzPage } from './createquizz';

@NgModule({
  declarations: [
    CreatequizzPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatequizzPage),
  ],
})
export class CreatequizzPageModule {}
