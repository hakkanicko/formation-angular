import { Attribute, ChangeDetectionStrategy, Component } from "@angular/core";

export type ButtonType = "validation" | "cancelation" | "configuration";

@Component({
  selector: "app-comp-button",
  templateUrl: "./comp-button.component.html",
  styleUrls: ["./comp-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompButtonComponent {
  constructor(@Attribute("type") public type: ButtonType = "validation") {}
}
