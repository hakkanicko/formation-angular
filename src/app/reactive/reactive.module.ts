import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveService } from './reactive.service';

@NgModule({
  declarations: [ReactiveComponent],
  imports: [CommonModule],
  providers: [ReactiveService],
  exports: [ReactiveComponent],
})
export class ReactiveModule {}
