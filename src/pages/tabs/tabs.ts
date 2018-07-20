import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CarrinhoPage } from '../carrinho/carrinho';
import { TabelaPage } from '../tabela/tabela';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CarrinhoPage;
  tab3Root = TabelaPage;

  constructor() {

  }
}
