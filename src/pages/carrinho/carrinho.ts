import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../models/produto';
import { RetalhoProvider } from '../../providers/retalho/retalho';

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public RetalhoService: RetalhoProvider) {
  }

  public carrinho: Produto[] = this.RetalhoService.getEstoque();

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }
  ionViewWillEnter(){
    this.carrinho = this.getCarrinho();
  }

  getCarrinho(){
    return this.carrinho;
  }

  getTotal(){
    this.RetalhoService.getTotal();
  }

  removeItem(produto: Produto){
    this.RetalhoService.delete(produto);
  }

}
