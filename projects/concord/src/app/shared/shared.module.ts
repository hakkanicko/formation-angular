import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../components/components.module";
import { LayoutsModule } from "../layouts/layouts.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  exports: [
    CommonModule,
    ComponentsModule,
    LayoutsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
