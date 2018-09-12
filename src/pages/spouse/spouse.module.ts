import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpousePage } from './spouse';

@NgModule({
  declarations: [
    SpousePage,
  ],
  imports: [
    IonicPageModule.forChild(SpousePage),
  ],
})
export class SpousePageModule {}
