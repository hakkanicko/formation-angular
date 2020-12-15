import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompDefaultComponent } from './comp-default/comp-default.component';
import { CompTextComponent } from './comp-text/comp-text.component';
import { CompButtonComponent } from './comp-button/comp-button.component';



@NgModule({
  declarations: [CompDefaultComponent, CompTextComponent, CompButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [CompDefaultComponent, CompTextComponent, CompButtonComponent]
})
export class ComponentsModule { }
