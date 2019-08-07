import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CockpitComponent } from './cockpit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CockpitComponent
  ],
  declarations: [
    CockpitComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CockpitModule { }
