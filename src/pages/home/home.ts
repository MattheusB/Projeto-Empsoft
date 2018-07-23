import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
import { Produto } from '../../models/produto';
import { RetalhoProvider } from '../../providers/retalho/retalho';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private produto1 =  {name: "Nine Inch Nails Live", valor: 25, codigo: 1, quantidade: 1, peso: 30}
  private produto2 =  {name: "Erykah Badu", valor: 15, codigo: 2, quantidade: 1, peso: 20}
  private produto3 =  {name: "Queen", valor: 30, codigo: 3, quantidade: 1, peso: 15}
  private produto4 =  {name: "Run-D.M.C.", valor: 10, codigo: 4, quantidade: 1, peso: 10}
  private produto5 =  {name: "Justin Timberlake", valor: 100, codigo: 5, quantidade: 1, peso: 5}
  private produto6 =  {name: "Lana Del Rey", valor: 40, codigo: 6, quantidade: 1, peso: 15}
  private produto7 =  {name: "Florence and the Machine", valor: 15, codigo: 7, quantidade: 1, peso: 25}
  private produto8 =  {name: "Michael Jackson", valor: 200, codigo: 8, quantidade: 1, peso: 1}
  private produto9 =  {name: "Whitney Houston", valor: 75, codigo: 9, quantidade: 1, peso: 2}
  private produto10 =  {name: "Back Street Boys", valor: 60, codigo: 10, quantidade: 1, peso: 35}

  constructor(public navCtrl: NavController, public navParams: NavParams, public RetalhoService: RetalhoProvider) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  addCarrinho1() {
    this.RetalhoService.add(this.produto1);
  }
  addCarrinho2() {
    this.RetalhoService.add(this.produto2);
  }

  addCarrinho3() {
    this.RetalhoService.add(this.produto3);
  }

  addCarrinho4() {
    this.RetalhoService.add(this.produto4);
  }

  addCarrinho5() {
    this.RetalhoService.add(this.produto5);
  }

  addCarrinho6() {
    this.RetalhoService.add(this.produto6);
  }

  addCarrinho7() {
    this.RetalhoService.add(this.produto7);
  }

  addCarrinho8() {
    this.RetalhoService.add(this.produto8);
  }

  addCarrinho9() {
    this.RetalhoService.add(this.produto9);
  }

  addCarrinho10() {
    this.RetalhoService.add(this.produto10);
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
