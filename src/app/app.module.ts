import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WadashiPage } from '../pages/wadashi/wadashi';
import { MembersPage } from '../pages/members/members';
import { KaiwaPage } from '../pages/kaiwa/kaiwa';
import { MemberDetailPage } from '../pages/member-detail/member-detail';

import { KaiwaPageModule } from '../pages/kaiwa/kaiwa.module';
import { MembersPageModule } from '../pages/members/members.module';
import { WadashiPageModule} from '../pages/wadashi/wadashi.module';
import { MemberDetailPageModule } from '../pages/member-detail/member-detail.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {ComponentsModule} from '../components/components.module';
import { RestApiProvider } from '../providers/rest-api/rest-api';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    KaiwaPageModule,
    WadashiPageModule,
    MembersPageModule,
    MemberDetailPageModule,
    ComponentsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WadashiPage,
    MembersPage,
    KaiwaPage,
    MemberDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ]
})
export class AppModule {}
