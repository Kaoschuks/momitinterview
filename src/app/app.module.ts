import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ServicesModule, PagesModule } from './modules';
import { CoreComponentsModule } from './core';
import { SubjectEffects, StudentEffects, studentReducer, subjectReducer } from './shared';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      subject: subjectReducer,
      student: studentReducer
    }),
    EffectsModule.forRoot([
      SubjectEffects, StudentEffects
    ]),
    CoreComponentsModule,
    ServicesModule, PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
