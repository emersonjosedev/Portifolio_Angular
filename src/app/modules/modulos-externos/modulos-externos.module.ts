import { BrowserModule, provideClientHydration, } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    BrowserModule,
   
    HttpClientModule
    
  ],
  providers: [provideClientHydration(),
    provideHttpClient(withFetch())
  ],

  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,

  ],
})
export class ModulosExternosModule {}
