import { NgModule } from '@angular/core';
import { RighttodownComponent } from './righttodown/righttodown';
import { UptorightComponent } from './uptoright/uptoright';
import { LefttodownComponent } from './lefttodown/lefttodown';
import { UptoleftComponent } from './uptoleft/uptoleft';
import { FlashCardComponent } from './flash-card/flash-card';
import { QuizPageComponent } from './quiz-page/quiz-page';
import { UserprofileComponent } from './userprofile/userprofile';
import { SettingsComponent } from './settings/settings';
@NgModule({
	declarations: [RighttodownComponent,
    UptorightComponent,
    LefttodownComponent,
    UptoleftComponent,
    FlashCardComponent,
    QuizPageComponent,
    UserprofileComponent,
    SettingsComponent],
	imports: [],
	exports: [RighttodownComponent,
    UptorightComponent,
    LefttodownComponent,
    UptoleftComponent,
    FlashCardComponent,
    QuizPageComponent,
    UserprofileComponent,
    SettingsComponent]
})
export class ComponentsModule {}
