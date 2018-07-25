import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, NavController } from 'ionic-angular';

import { KaiwaPage } from '../pages/kaiwa/kaiwa';
import { MembersPage } from '../pages/members/members';
import { WadashiPage } from '../pages/wadashi/wadashi';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = KaiwaPage;
  pages: Array<{title: string, component: any}>;
  tab1_all = KaiwaPage;
  tab2_contactlist = MembersPage;
  tab3_wadashi = WadashiPage;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
   // public nac:NavController,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 
}
