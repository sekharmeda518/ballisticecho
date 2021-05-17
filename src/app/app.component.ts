import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DisplayCustomerList } from "./models/customer-list.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  customerList: DisplayCustomerList;
  constructor(private translate: TranslateService) {
    this.translate.addLangs(["en-CA", "fr-FR"]);
    this.translate.setDefaultLang("en-CA");

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/fr|fr-FR/) ? "fr-FR" : "en-CA");
  }
}
