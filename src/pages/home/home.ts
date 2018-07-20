import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Retalho1Page } from '../retalho1/retalho1';
import { Retalho2Page } from '../retalho2/retalho2';
import { Retalho3Page } from '../retalho3/retalho3';
import { Retalho10Page } from '../retalho10/retalho10';
import { Retalho9Page } from '../retalho9/retalho9';
import { Retalho8Page } from '../retalho8/retalho8';
import { Retalho7Page } from '../retalho7/retalho7';
import { Retalho6Page } from '../retalho6/retalho6';
import { Retalho5Page } from '../retalho5/retalho5';
import { Retalho4Page } from '../retalho4/retalho4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  goToRetalho1(){
    this.navCtrl.push(Retalho1Page);
  }

  goToRetalho2(){
    this.navCtrl.push(Retalho2Page);
  }

  goToRetalho3(){
    this.navCtrl.push(Retalho3Page);
  }

  goToRetalho4(){
    this.navCtrl.push(Retalho4Page);
  }

  goToRetalho5(){
    this.navCtrl.push(Retalho5Page);
  }

  goToRetalho6(){
    this.navCtrl.push(Retalho6Page);
  }
  
  goToRetalho7(){
    this.navCtrl.push(Retalho7Page);
  }

  goToRetalho8(){
    this.navCtrl.push(Retalho8Page);
  }

  goToRetalho9(){
    this.navCtrl.push(Retalho9Page);
  }

  goToRetalho10(){
    this.navCtrl.push(Retalho10Page);
  }

}
