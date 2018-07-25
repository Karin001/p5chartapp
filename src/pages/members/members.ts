import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { MemberDetailPage } from '../member-detail/member-detail';
/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {
  dataReady=false;
  menberListQuote;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public restApi: RestApiProvider
  ) {
    this.restApi.watchMemberList().subscribe(signal=>{
      if(signal === 'success') {
        this.menberListQuote = this.restApi.memberListCache.members;
        this.dataReady = true;
        console.log('signal',signal,this.menberListQuote)
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
  }
  navToDetail(member){
    this.navCtrl.push(MemberDetailPage, {member})
  }
}
