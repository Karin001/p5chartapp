import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberDetailPage } from './member-detail';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxChartsModule} from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    MemberDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberDetailPage),
    BrowserAnimationsModule,
    NgxChartsModule
  ],
})
export class MemberDetailPageModule {}
