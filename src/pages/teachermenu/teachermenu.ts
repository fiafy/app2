import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";

/**
 * Generated class for the TeachermenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-teachermenu",
  templateUrl: "teachermenu.html",
})
export class TeachermenuPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TeachermenuPage");
  }

  logout() {
    this.storage.clear();

    this.navCtrl.push(HomePage);
  }
}
