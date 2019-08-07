import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CockpitModule } from './cockpit/cockpit.module';
import { ServerElementModule } from './server-element/server-element.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CockpitModule,
    ServerElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
