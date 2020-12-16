import { Component } from "@angular/core";
import { AnyCardContent } from "projects/any/src/public-api";
import { ReactiveService } from "./reactive/reactive.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "lab";
  open = false;

  cards: AnyCardContent[] = [
    {
      header: { title: "Jolie titre" },
      image: "http://unsplash.it/300",
      text: "Une bien belle carte",
      actions: [{ label: "Like", action: { type: "LIKE" } }],
    },
    {
      header: { title: "Jolie 2ème titre", subtitle: "Sous titre" },
      image: "http://unsplash.it/300",
      text: "Une autre belle carte",
      actions: [{ label: "Like", action: { type: "LIKE" } }],
    },
  ];

  constructor(public rs: ReactiveService) {}
}
