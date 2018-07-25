import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersPage } from './members';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
@NgModule({
  declarations: [
    MembersPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersPage),
  ],
  exports:[
    MembersPage
  ]
})
export class MembersPageModule {
  constructor(
    public restApi: RestApiProvider
  ){
    console.log('111');
    this.restApi.getMemberList();
  }
}
