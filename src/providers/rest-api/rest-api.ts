import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { retry,take } from 'rxjs/operators';
const CONFIG = {
  dev:{
    memberListUrl: 'assets/memberList.json',
    
  },
  pro:{

  }
}
const configSet = "dev";
const options = (function(configSet){return CONFIG[configSet]}(configSet));
/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {
  memberListBS = new BehaviorSubject<string>(null);
  memberListCache;
    constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }
  getMemberList(){
    this.http.get(options.memberListUrl)
    .retry(3)
    .subscribe((data)=>{
      if(data && Object.keys(data).length > 0){
        this.memberListCache = data;
        this.memberListBS.next('success');
    }})
  }
  watchMemberList(){
    return this.memberListBS.asObservable();
  }

}
