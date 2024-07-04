import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  private isBrowser: boolean;
  private windowWidthSubject: BehaviorSubject<number>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.windowWidthSubject = new BehaviorSubject<number>(this.getWindowWidth());
    if (this.isBrowser) {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  private onResize(): void {
    this.windowWidthSubject.next(this.getWindowWidth());
  }

  private getWindowWidth(): number {
    return this.isBrowser ? window.innerWidth : 0;
  }

  get windowWidth$() {
    return this.windowWidthSubject.asObservable();
  }
}
