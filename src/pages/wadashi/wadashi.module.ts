import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WadashiPage } from './wadashi';

@NgModule({
  declarations: [
    WadashiPage,
  ],
  imports: [
    IonicPageModule.forChild(WadashiPage),
  ],
  exports:[WadashiPage]
})
export class WadashiPageModule {}
