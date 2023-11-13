import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

export const components = [
  HeaderComponent
]

@NgModule({
  exports: components,
  declarations: components,
  imports: [
    CommonModule
  ]
})
export class CoreComponentsModule { }
