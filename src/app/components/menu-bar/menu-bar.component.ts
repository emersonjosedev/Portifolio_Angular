import { Component,OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { WindowSizeService } from '../../services/window-size/window-size.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})

export class MenuBarComponent  implements OnInit {

  
  isSmallScreen: boolean = false;
  isBigScren: boolean = false;
  cliclou = false

  constructor(private windowSizeService: WindowSizeService) {}

  ngOnInit(): void {
    this.windowSizeService.windowWidth$.subscribe(width => {
      this.isSmallScreen = width <= 450;
    });

    this.windowSizeService.windowWidth$.subscribe(width => {
      this.isBigScren = width > 450 || this.cliclou == true;
    });
  }

  clicar(): void{
    this.cliclou = !this.cliclou
  }
}

