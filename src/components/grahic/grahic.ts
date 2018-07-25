import { Component } from '@angular/core';

/**
 * Generated class for the GrahicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'grahic',
  templateUrl: 'grahic.html'
})
export class GrahicComponent {

  text: string;
  testItems=[1,2,3,4,5,6,7];
  constructor() {
    console.log('Hello GrahicComponent Component');
    this.text = 'Hello World';
  }

}
