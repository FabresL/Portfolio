/* script.js — Portfólio Fabrestack */

document.addEventListener('DOMContentLoaded', () => {

  // Aplica animacao de entrada com pequeno atraso entre blocos
  const elementosAnimados = document.querySelectorAll('.animar');
  elementosAnimados.forEach((elemento, indice) => {
    elemento.style.animationDelay = `${indice * 0.1}s`;
    elemento.classList.add('animar-entrada');
  });

  // Efeito de ondulacao ao clicar nos cartoes
  document.querySelectorAll('.cartao').forEach((cartao) => {
    cartao.addEventListener('click', function (evento) {
      const ondulacao = document.createElement('span');
      const area = this.getBoundingClientRect();
      const tamanho = Math.max(area.width, area.height) * 2;

      Object.assign(ondulacao.style, {
        position: 'absolute',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.07)',
        width: `${tamanho}px`,
        height: `${tamanho}px`,
        left: `${evento.clientX - area.left - tamanho / 2}px`,
        top: `${evento.clientY - area.top - tamanho / 2}px`,
        transform: 'scale(0)',
        animation: 'ondulacaoClique 0.55s ease-out forwards',
        pointerEvents: 'none',
      });

      this.appendChild(ondulacao);
      ondulacao.addEventListener('animationend', () => ondulacao.remove());
    });
  });

});

