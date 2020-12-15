import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServicesModule } from "./services/services.module";
import { ContainersModule } from "./containers/containers.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ServicesModule, ContainersModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
