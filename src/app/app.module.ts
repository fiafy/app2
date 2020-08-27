import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { StudentPage } from "./../pages/student/student";
import { TeachermenuPage } from "./../pages/teachermenu/teachermenu";

//-------
import { ContactPage } from "../pages/contact/contact";
import { SearchPage } from "../pages/search/search";
import { ListPage } from "../pages/list/list";
import { TabsPage } from "../pages/tabs/tabs";
//-------

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudentPage,
    TeachermenuPage,
    ContactPage,
    SearchPage,
    ListPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudentPage,
    TeachermenuPage,
    ContactPage,
    SearchPage,
    ListPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
