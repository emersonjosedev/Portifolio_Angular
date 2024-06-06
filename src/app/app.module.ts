import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BemVindoComponent } from './components/bem-vindo/bem-vindo.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { MatIconModule } from '@angular/material/icon';
import { ResumoComponent } from './components/resumo/resumo.component';
import { VideosComponent } from './components/videos/videos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BemVindoComponent,
    SobreComponent,
    ResumoComponent,
    VideosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    MatGridListModule
    
   

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 
}