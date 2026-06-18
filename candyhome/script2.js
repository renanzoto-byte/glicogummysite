const ursos = document.getElementById('ursos');
const ursogigante = document.getElementById('ursogigante');
const ursofrutas = document.getElementById('ursofrutas')
window.onload = function() {
    setTimeout(function(){
        ursos.classList.add('movimento');
        ursofrutas.classList.add('subirurso')
    },1000);
}

window.addEventListener('scroll', () => {
  // Pega a posição atual da barra de rolagem Y
  const posicaoY = window.scrollY;
    if (posicaoY >= 750) {
        ursogigante.classList.add('aparecerursao')
    } 
})