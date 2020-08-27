import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StudentPage } from "./../student/student";
import { TeachermenuPage } from "./../teachermenu/teachermenu";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  /* logindata: any = {}; */

  username: string;
  password: string;

  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public http: HttpClient
  ) {}

  login(username, password) {
    var url =
      "http://10.44.8.87/Wkapp/login.php?username=" +
      username +
      "&password=" +
      password;

    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe((data) => {
      this.storage.set("user_id", data.id);
      this.storage.get("user_id").then((val) => {});

      console.log(data.id);
      console.log(data);
      if (data.id != null && data.type == "teacher") {
        this.navCtrl.push(TeachermenuPage);
      } else if (data.id != null && data.type == "student") {
        this.navCtrl.push(StudentPage);
      } else {
        alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
      }
    });
  }
} //end class
