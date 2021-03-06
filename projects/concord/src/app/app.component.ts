import { Component } from "@angular/core";
import { DispatcherService } from "./services/dispatcher.service";
import { CnActionTypes } from "./services/enum/cn-action-types.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(public dispatcher: DispatcherService) {}
}
