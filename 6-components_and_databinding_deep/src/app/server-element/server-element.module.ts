import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerElementComponent } from './server-element.component';


@NgModule({
  exports: [
    ServerElementComponent
  ],
  declarations: [
    ServerElementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServerElementModule { }
