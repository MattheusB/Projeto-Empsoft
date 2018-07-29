import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Retalho1Page } from '../tutorial/retalho1/retalho1';
import { Retalho2Page } from '../tutorial/retalho2/retalho2';
import { Retalho3Page } from '../tutorial/retalho3/retalho3';
import { Retalho4Page } from '../tutorial/retalho4/retalho4';
import { Retalho5Page } from '../tutorial/retalho5/retalho5';
import { Retalho6Page } from '../tutorial/retalho6/retalho6';
import { Retalho7Page } from '../tutorial/retalho7/retalho7';
import { Retalho8Page } from '../tutorial/retalho8/retalho8';
import { Retalho9Page } from '../tutorial/retalho9/retalho9';
import { Retalho10Page } from '../tutorial/retalho10/retalho10';
import { RetalhoProvider } from '../../providers/retalho/retalho';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private produto1 =  {name: "Retalhos lisos quadrados", valor: 25, codigo: 1, quantidade: 1, peso: 30}
  private produto2 =  {name: "Retalhos quadrados com detalhes", valor: 15, codigo: 2, quantidade: 1, peso: 20}
  private produto3 =  {name: "Retalhos grandes e retangulares", valor: 30, codigo: 3, quantidade: 1, peso: 15}
  private produto4 =  {name: "Retalhos de couro (pequeno)", valor: 10, codigo: 4, quantidade: 1, peso: 10}
  private produto5 =  {name: "Retalhos de couro marrom", valor: 10, codigo: 5, quantidade: 1, peso: 5}
  private produto6 =  {name: "Retalhos de couro (medio)", valor: 40, codigo: 6, quantidade: 1, peso: 15}
  private produto7 =  {name: "Retalhos de couro (grande)", valor: 15, codigo: 7, quantidade: 1, peso: 25}
  private produto8 =  {name: "Retalhos de PVC", valor: 20, codigo: 8, quantidade: 1, peso: 1}
  private produto9 =  {name: "Retalhos de couro (extra-grande)", valor: 75, codigo: 9, quantidade: 1, peso: 2}
  private produto10 =  {name: "Retalhos de couro com detalhes", valor: 60, codigo: 10, quantidade: 1, peso: 35}

  constructor(public navCtrl: NavController, public navParams: NavParams, public RetalhoService: RetalhoProvider, public toastCtrl: ToastController) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  addCarrinho1() {
    this.RetalhoService.add(this.produto1);
    this.abrirToast("Produto adicionado ao carrinho.");
  }
  addCarrinho2() {
    this.RetalhoService.add(this.produto2);
    this.abrirToast("Produto adicionado ao carrinho.");
  }

  addCarrinho3() {
    this.RetalhoService.add(this.produto3);
    this.abrirToast("Produto adicionado ao carrinho.");
  }

  addCarrinho4() {
    this.RetalhoService.add(this.produto4);
    this.abrirToast("Produto adicionado ao carrinho.");
  }

  addCarrinho5() {
    this.RetalhoService.add(this.produto5);
    this.abrirToast("Produto adicionado ao carrinho.");
  }

  addCarrinho6() {
    this.RetalhoService.add(this.produto6);
    this.abrirToast("Produto adicionado ao carrinho.");
  }

  addCarrinho7() {
    this.RetalhoService.add(this.produto7);
    this.abrirToast("Produto adicionado ao carrinho.");
  }

  addCarrinho8() {
    this.RetalhoService.add(this.produto8);
    this.abrirToast("Produto adicionado ao carrinho.");
  }

  addCarrinho9() {
    this.RetalhoService.add(this.produto9);
    this.abrirToast("Produto adicionado ao carrinho.");
  }

  addCarrinho10() {
    this.RetalhoService.add(this.produto10);
    this.abrirToast("Produto adicionado ao carrinho.");
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

  private abrirToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
