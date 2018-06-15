import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    AboutPage,
    TabsPage,
    CameraPage,
    HttpModule
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    AboutPage,
    TabsPage,
    CameraPage,
    HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
