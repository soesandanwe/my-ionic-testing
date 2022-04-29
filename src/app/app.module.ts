import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RequestTypesComponent} from "../pages/make-requests/components/request-types/request-types-component";
import {RequestItemSelectorComponent} from "../pages/make-requests/components/request-item-selector/request-item-selector-component";
import {RequestItemSelector} from "../pages/make-requests/components/request-item-selector/request-item-selector";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RequestTypesComponent,
    RequestItemSelector,
    RequestItemSelectorComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RequestTypesComponent,
    RequestItemSelector,
    RequestItemSelectorComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
