import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { ContainersModule } from './containers/containers.module';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    ContainersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LayoutDefaultComponent]
})
export class AppModule { }
