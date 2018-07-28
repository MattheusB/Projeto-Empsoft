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
    var index = this.estoque.indexOf(produto);
    
    if (index == -1) {
      this.estoque.push(produto);
      this.adicionaValor(produto.valor);
    } else {
      this.estoque[index].quantidade += 1;
      this.adicionaValor(produto.valor);
    }

    console.log(this.estoque);
  }

  public delete(produto: Produto){
    
    var index = this.estoque.indexOf(produto);

    if (index > -1 && this.estoque[index].quantidade == 1) {
      this.estoque.splice(index, 1);
      this.removeValor(produto.valor);
    } else if (index > -1 && this.estoque[index].quantidade > 0) {
      this.estoque[index].quantidade -= 1;
      this.removeValor(produto.valor);
    }

    console.log(this.estoque);
  }

  private adicionaValor(valor: number){
    this.total += valor;
  }

  private removeValor(valor: number){
    this.total -= valor;
  }

  public getTotal(){
    if(this.total == 0){
      return 0;
    }
    return this.total.toFixed(2);
  }

  public getEstoque(){
    return this.estoque;
  }

  public zeraCarrinho(){
    while (this.estoque.length > 0) {
      this.estoque.pop();
    }
    this.total = 0;
    console.log(this.estoque);
  }

}
