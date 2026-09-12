var body = document.body;
var btnTema = document.getElementById('btnTema');
var btnIdioma = document.getElementById('btnIdioma');
var temaSalvo = localStorage.getItem('tema');
var idiomaSalvo = localStorage.getItem('idioma');
var prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
function aplicarTema(escuro){
    if (escuro){
        body.classList.add('dark');
        btnTema.textContent = '☾';
    } else {
        body.classList.remove('dark');
        btnTema.textContent = '☀';
    }
}
if (temaSalvo === 'dark' || (!temaSalvo && prefereEscuro)){
    aplicarTema(true);
} else {
    aplicarTema(false);
}
btnTema.onclick = function (){
    var estaEscuro = body.classList.contains('dark');
    aplicarTema(!estaEscuro);
    localStorage.setItem('tema', !estaEscuro ? 'dark' : 'light');
};
function aplicarIdioma(idioma){
    var elementos = document.querySelectorAll('[data-pt][data-en]');
    elementos.forEach(function (el){
        if (idioma === 'en'){
            el.textContent = el.getAttribute('data-en');
        } else {
            el.textContent = el.getAttribute('data-pt');
        }
    });
    if (idioma === 'en'){
        document.documentElement.setAttribute('lang', 'en');
        btnIdioma.textContent = 'PT';
    } else {
        document.documentElement.setAttribute('lang', 'pt-br');
        btnIdioma.textContent = 'EN';
    }
}
if (idiomaSalvo === 'en'){
    aplicarIdioma('en');
} else {
    aplicarIdioma('pt');
}
btnIdioma.onclick = function (){
    var idiomaAtual = document.documentElement.getAttribute('lang');
    if (idiomaAtual === 'en'){
        aplicarIdioma('pt');
        localStorage.setItem('idioma', 'pt');
    } else {
        aplicarIdioma('en');
        localStorage.setItem('idioma', 'en');
    }
};
var carrosseis = document.querySelectorAll('.carrossel');
carrosseis.forEach(function (carrossel){
    var slides = carrossel.querySelectorAll('.slide');
    var btnAnterior = carrossel.querySelector('.anterior');
    var btnProximo = carrossel.querySelector('.proximo');
    var contador = 0;
    var tempo;
    function atualizarClasses(){
        slides.forEach(function (slide){
            slide.classList.remove('ativo', 'anterior', 'proximo');
        });
        var total = slides.length;
        var idxAnterior = (contador - 1 + total) % total;
        var idxProximo = (contador + 1) % total;
        slides[contador].classList.add('ativo');
        slides[idxAnterior].classList.add('anterior');
        slides[idxProximo].classList.add('proximo');
    }
    function proximoSlide(){
        contador++;
        if (contador === slides.length){
            contador = 0;
        }
        atualizarClasses();
    }
    function slideAnterior(){
        contador--;
        if (contador === -1){
            contador = slides.length - 1;
        }
        atualizarClasses();
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
    atualizarClasses();
    iniciarAuto();
});