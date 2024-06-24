import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../../components/menu/menu.component';
import { BemVindoComponent } from '../../components/bem-vindo/bem-vindo.component';
import { SobreComponent } from '../../components/sobre/sobre.component';

import { ResumoComponent } from '../../components/resumo/resumo.component';
import { VideosComponent } from '../../components/videos/videos.component';
import { RodapeComponent } from '../../components/rodape/rodape.component';
import {SocialCardsComponent} from '../../components/social-cards/social-cards.component';
import { ModulosExternosModule } from '../modulos-externos/modulos-externos.module';

import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    MenuComponent,
    BemVindoComponent,
    SobreComponent,
    ResumoComponent,
    VideosComponent,
    RodapeComponent,
    SocialCardsComponent,
    MenuBarComponent,
  ],
  imports: [CommonModule, ModulosExternosModule],
  exports: [
    MenuComponent,
    BemVindoComponent,
    SobreComponent,
    ResumoComponent,
    VideosComponent,
    RodapeComponent,
    SocialCardsComponent,
    MenuBarComponent 
  ],
})
export class MenuPortifolioModule {}
