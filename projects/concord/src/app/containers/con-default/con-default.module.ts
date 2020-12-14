import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConDefaultComponent } from './con-default/con-default.component';



@NgModule({
  declarations: [ConDefaultComponent],
  imports: [
    CommonModule
  ],
  exports: [ConDefaultComponent]
})
export class ConDefaultModule { }
