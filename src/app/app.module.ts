import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { InformationPage } from "./../pages/information/information";
import { PublicizePage } from "./../pages/publicize/publicize";
import { AddpublicizePage } from "./../pages/addpublicize/addpublicize";
import { NewsreleasePage } from "./../pages/newsrelease/newsrelease";
import { StudentPage } from "./../pages/student/student";
import { TeachermenuPage } from "./../pages/teachermenu/teachermenu";
import { StudyplanPage } from "./../pages/studyplan/studyplan";

//----------
import { UpdatenewsPage } from "./../pages/updatenews/updatenews";

//-------
import { IndexPage } from "./../pages/index/index";
import { ContactPage } from "../pages/contact/contact";
import { SearchPage } from "../pages/search/search";
import { TabsPage } from "../pages/tabs/tabs";
//-------

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InformationPage,
    PublicizePage,
    AddpublicizePage,
    NewsreleasePage,
    StudentPage,
    TeachermenuPage,
    StudyplanPage,
    UpdatenewsPage,
    IndexPage,
    ContactPage,
    SearchPage,
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
    InformationPage,
    PublicizePage,
    AddpublicizePage,
    NewsreleasePage,
    StudentPage,
    TeachermenuPage,
    StudyplanPage,
    UpdatenewsPage,
    IndexPage,
    ContactPage,
    SearchPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
