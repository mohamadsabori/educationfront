import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCoursePage } from './create-course';

@NgModule({
  declarations: [
    CreateCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCoursePage),
  ],
})
export class CreateCoursePageModule {}
