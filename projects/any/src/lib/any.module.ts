import { NgModule } from '@angular/core';
import { AnyComponent } from './any.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [AnyComponent, CardComponent],
  imports: [
  ],
  exports: [AnyComponent, CardComponent]
})
export class AnyModule { }
