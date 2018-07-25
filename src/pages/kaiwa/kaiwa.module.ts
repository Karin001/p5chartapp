import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KaiwaPage } from './kaiwa';

@NgModule({
  declarations: [
    KaiwaPage,
  ],
  imports: [
    IonicPageModule.forChild(KaiwaPage),
  ],
  exports:[KaiwaPage]
})
export class KaiwaPageModule {}
