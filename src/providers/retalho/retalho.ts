import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto';

/*
  Generated class for the RetalhoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RetalhoProvider {

  private estoque: Produto[] = [];

  private total: number = 0;

  constructor() {
    console.log('Hello RetalhoProvider Provider');
  }

  public add(produto: Produto){
    this.adicionaValor(produto.valor);
    this.estoque.push(produto);
    console.log(this.estoque);
  }

  public delete(produto: Produto){
    this.removeValor(produto.valor);
    var index = this.estoque.indexOf(produto);
    if (index > -1) {
      this.estoque.splice(index, 1);
    }
  }

  private adicionaValor(valor: number){
    this.total += valor;
  }

  private removeValor(valor: number){
    this.total -= valor;
  }

  public getTotal(){
    return this.total;
  }

  public getEstoque(){
    return this.estoque;
  }
}
