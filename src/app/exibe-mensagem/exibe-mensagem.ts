import { Component } from '@angular/core';

@Component({
  selector: 'app-exibe-mensagem',
  standalone: false,
  templateUrl: './exibe-mensagem.html',
  styleUrl: './exibe-mensagem.css'
})
export class ExibeMensagem {
  mensagem: String;

  constructor() {
    this.mensagem = ''
  }

  alterarMensagem(n: String) {
    this.mensagem = `Seja bem-vindo, ${n}!`;
  }
}
