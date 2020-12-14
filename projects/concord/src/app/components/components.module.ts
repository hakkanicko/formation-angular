import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompDefaultComponent } from './comp-default/comp-default.component';



@NgModule({
  declarations: [CompDefaultComponent],
  imports: [
    CommonModule
  ],
  exports: [CompDefaultComponent]
})
export class ComponentsModule { }
