import { CommonModule, DOCUMENT } from "@angular/common";
import { Inject, NgModule, PLATFORM_INITIALIZER } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { AnyComponent } from "./any.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [AnyComponent, CardComponent],
  imports: [MatCardModule, CommonModule, MatButtonModule],
  providers: [
    {
      provide: PLATFORM_INITIALIZER,
      useExisting: AnyModule,
    },
  ],
  exports: [AnyComponent, CardComponent],
})
export class AnyModule {
  constructor(@Inject(DOCUMENT) private document: Document) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://unpkg.com/@angular/material@11.0.3/prebuilt-themes/indigo-pink.css";
    document.head.appendChild(link);
  }
}
