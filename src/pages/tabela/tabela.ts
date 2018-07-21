import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabela',
  templateUrl: 'tabela.html',
})
export class TabelaPage {
  private qntMes;
  private hrsDias;
  private diasSemana;
  private semanaAno;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabelaPage');

  }

  /**
   * 
   * @param qntMes  quanto o cliente quer ganhar por mes
   * @param hrsDia  quantas horas quer trabalhar por dia
   * @param diasSemana  quantos dias quer trabalhar na semana
   * @param semanaAno  quantas semanas quer trabalhar por ano
   */
  calculoFreelancer():number{
    let valorHoraFinal: number;
    let valorProjetoFinal:number;

    if(this.hrsDias == null || this.qntMes == null || this.diasSemana == null || this.semanaAno == null){
      alert("Por favor, preencha todos os dados")
    }else{
      let horasPorSemana = this.hrsDias * this.diasSemana;
      let horasPorAnoDeFolga = horasPorSemana * this.semanaAno;
      valorHoraFinal = this.qntMes * 12 / (52.1 * horasPorSemana - horasPorAnoDeFolga);

      
      alert("O seu novo valor por hora é: R$" + valorHoraFinal.toFixed(2) + "/hora");
      return valorHoraFinal;
    }
  }
}