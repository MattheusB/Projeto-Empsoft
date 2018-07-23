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

  constructor() {
    console.log('Hello RetalhoProvider Provider');
  }

  public add(produto: Produto){
    this.estoque.push(produto);
    console.log(this.estoque);
  }

  getEstoque(){
    return this.estoque;
  }
}
