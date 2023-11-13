import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ServicesModule, PagesModule } from './modules';
import { CoreComponentsModule } from './core';
import { SubjectEffects, subjectReducer } from './shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      subject: subjectReducer 
    }),
    EffectsModule.forRoot([
      SubjectEffects
    ]),
    CoreComponentsModule,
    ServicesModule, PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
