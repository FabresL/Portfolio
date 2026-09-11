var carrosseis = document.querySelectorAll('.carrossel');
carrosseis.forEach(function (carrossel){
    var slides = carrossel.querySelectorAll('.slide');
    var btnAnterior = carrossel.querySelector('.anterior');
    var btnProximo = carrossel.querySelector('.proximo');
    var contador = 0;
    var tempo;
    function proximoSlide(){
        slides[contador].classList.remove('ativo');
        contador++;
        if (contador === slides.length){
            contador = 0;
        }
        slides[contador].classList.add('ativo');
    }
    function slideAnterior(){
        slides[contador].classList.remove('ativo');
        contador--;
        if (contador === -1){
            contador = slides.length - 1;
        }
        slides[contador].classList.add('ativo');
    }
    function iniciarAuto(){
        tempo = setInterval(proximoSlide, 3000);
    }
    function reiniciarAuto(){
        clearInterval(tempo);
        iniciarAuto();
    }
    btnProximo.onclick = function (){
        proximoSlide();
        reiniciarAuto();
    };
    btnAnterior.onclick = function (){
        slideAnterior();
        reiniciarAuto();
    };
    iniciarAuto();
});