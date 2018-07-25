import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MemberDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-detail',
  templateUrl: 'member-detail.html',
})
export class MemberDetailPage {
 
  dataReady =false;
  memberQuote;
  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#5DC9C9', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  bgSet;
  onSelect(event) {
    console.log(event);
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.memberQuote = this.navParams.get('member');
    this.bgSet = `url(${this.memberQuote.bg})`
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberDetailPage');
  }

}
