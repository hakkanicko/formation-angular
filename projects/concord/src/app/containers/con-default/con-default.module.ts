import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConDefaultComponent } from "./con-default/con-default.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [ConDefaultComponent],
  imports: [SharedModule],
  exports: [ConDefaultComponent],
})
export class ConDefaultModule {}
