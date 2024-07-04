import { Injectable, NgZone, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnDestroy {
  private intervalId: any;
  private count: number = 0;

  constructor(private ngZone: NgZone) {}

  startTimer(interval: number, action: (count: number) => void): void {
    this.stopTimer(); // Parar qualquer timer existente antes de iniciar um novo
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.count++;
          action(this.count);
        });
      }, interval); // O intervalo deve ser passado aqui fora da função run
    });
  }

  stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
