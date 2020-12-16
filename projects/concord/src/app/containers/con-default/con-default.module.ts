import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConDefaultComponent } from "./con-default/con-default.component";
import { SharedModule } from "../../shared/shared.module";
import { AnyModule } from "projects/any/src/public-api";

@NgModule({
  declarations: [ConDefaultComponent],
  imports: [SharedModule, AnyModule],
  exports: [ConDefaultComponent],
})
export class ConDefaultModule {}
