import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './loading-indicator.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoadingIndicatorComponent
  ]
})
export class LoadingIndicatorModule { }
