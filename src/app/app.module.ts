import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RetalhoProvider } from '../providers/retalho/retalho';
import { CarrinhoPageModule } from '../pages/carrinho/carrinho.module';
import { TabelaPageModule } from '../pages/tabela/tabela.module';
import { Retalho1PageModule } from '../pages/retalho1/retalho1.module';
import { Retalho2PageModule } from '../pages/retalho2/retalho2.module';
import { Retalho3PageModule } from '../pages/retalho3/retalho3.module';
import { Retalho4PageModule } from '../pages/retalho4/retalho4.module';
import { Retalho5PageModule } from '../pages/retalho5/retalho5.module';
import { Retalho6PageModule } from '../pages/retalho6/retalho6.module';
import { Retalho7PageModule } from '../pages/retalho7/retalho7.module';
import { Retalho8PageModule } from '../pages/retalho8/retalho8.module';
import { Retalho9PageModule } from '../pages/retalho9/retalho9.module';
import { Retalho10PageModule } from '../pages/retalho10/retalho10.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CarrinhoPageModule,
    TabelaPageModule,
    Retalho1PageModule,
    Retalho2PageModule,
    Retalho3PageModule,
    Retalho4PageModule,
    Retalho5PageModule,
    Retalho6PageModule,
    Retalho7PageModule,
    Retalho8PageModule,
    Retalho9PageModule,
    Retalho10PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RetalhoProvider
  ]
})
export class AppModule {}
