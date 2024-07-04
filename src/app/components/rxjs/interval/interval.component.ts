import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../../../services/timer/timer.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  texto = ['','s','e','j','a',' ','b','e','m','-','v','i','n','d','o','/','a','.',];
  count: number = 0;
  interval: number = 100; // Defina o intervalo desejado aqui
  numero = 0;
  direcao = 1; // 1 para ir para frente, -1 para ir para trás
  textoAtual: string = '';

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.startTimer(this.interval, (count: number) => {
      // Mudar de direção se atingir o final ou o início da lista
      if (this.numero === this.texto.length - 1) {
        this.direcao = -1;
      } else if (this.numero === 0) {
        this.direcao = 1;
      }

      // Atualizar o número
      this.numero += this.direcao;

      // Atualizar a string de exibição
      if (this.direcao === 1) {
        this.textoAtual = this.textoAtual + this.texto[this.numero];
      } else {
        this.textoAtual = this.textoAtual.slice(0, -1);
      }
    });
  }

  ngOnDestroy(): void {
    this.timerService.stopTimer();
  }

}
