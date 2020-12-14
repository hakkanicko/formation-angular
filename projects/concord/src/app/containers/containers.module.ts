import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutsModule } from "../layouts/layouts.module";
import { ComponentsModule } from "../components/components.module";
import { ConDefaultModule } from "./con-default/con-default.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutsModule, ComponentsModule, ConDefaultModule],
})
export class ContainersModule {}
