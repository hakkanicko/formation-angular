import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveModule } from './reactive/reactive.module';
import { AnyModule } from 'projects/any/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveModule,
    AnyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
