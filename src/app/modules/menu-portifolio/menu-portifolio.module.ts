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
import { LogosComponent } from '../../components/logos/logos.component';
import { IntervalComponent } from '../../components/rxjs/interval/interval.component';
import{TimerService} from '../../services/timer/timer.service'

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
    LogosComponent,
    IntervalComponent,

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
    MenuBarComponent,
    LogosComponent,
    IntervalComponent,
  ],
})
export class MenuPortifolioModule {}
