import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConDefaultComponent } from "./con-default/con-default.component";
import { ComponentsModule } from "../../components/components.module";
import { LayoutsModule } from "../../layouts/layouts.module";

@NgModule({
  declarations: [ConDefaultComponent],
  imports: [CommonModule, ComponentsModule, LayoutsModule],
  exports: [ConDefaultComponent],
})
export class ConDefaultModule {}
