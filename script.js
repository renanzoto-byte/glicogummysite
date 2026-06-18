
const logoAnimation = document.getElementById("logoanimation");
const imagemLogo = document.getElementById("imagemlogo");
const tittleSugar = document.getElementById("tittlesugar");
const advanceButton = document.getElementById("advance");
const preconteudo = document.getElementById("preconteudo");
const ursinhosLegais = document.getElementById("ursinhosgummy");
window.onload = function () {
    setTimeout(function esconderLoading() {
        const loading = document.getElementById("carregando");
        loading.style.display = "none";
        setTimeout(function(){
            logoAnimation.classList.add('classeanimada');
            setTimeout(function(){
                logoAnimation.classList.remove('classeanimada');
                setTimeout(function(){
                    imagemLogo.style.display = "none";
                    tittleSugar.style.display = "block";
                    setTimeout(function(){
                        logoAnimation.classList.add('classeanimada');
                        setTimeout(function(){
                            advanceButton.classList.add('aparecerbotao');
                        }, 2650)
                    })
                }, 2600)
            }, 4000)
        }, 0)
    }, 5000);
};






function mostrarfundo () {
    const screen = document.getElementById("initialScreen");
    advanceButton.style.display = "none";
    ursinhosLegais.classList.add('classesumir');
    setTimeout(() => {
    preconteudo.style.display = "none";
    screen.classList.add("aparecerscreen");

    }, 2000);

};


const buttonReady = document.getElementById('btClick');
const areaContent = document.getElementById('areacontent');
const loaderMom = document.getElementById('loadermother');
const opacitydiv = document.getElementById('opacitydiv');
const initialapplout = document.getElementById('initialapplout');
const initialambient = document.getElementById('initialambient');
const ursinhogirante = document.getElementById('ursinhogirante');
const welcomenew = document.getElementById('welcomenew');
const buttonDiv = document.getElementById('buttonDiv');
const divlogin = document.getElementById('divlogin');


buttonReady.addEventListener('click', function(){
    areaContent.classList.add('direita')
    buttonReady.style.display = "none";
    setTimeout(function(){
        loaderMom.classList.add('addopacity')
        setTimeout(function(){
            opacitydiv.classList.add('opacityon')
            setTimeout(function(){
                initialapplout.classList.add('animado');
                setTimeout(function(){
                    initialambient.classList.add('escurecer');
                    setTimeout(function(){ursinhogirante.style.display = 'none'
                        initialambient.classList.add('aumento');
                        initialambient.classList.remove('escurecer');
                        welcomenew.style.display = "block";
                        buttonDiv.classList.add('botaogoogle');
                        setTimeout(function(){divlogin.style.display = 'flex';
                            setTimeout(function(){divlogin.classList.add('grandeclasse')}, 50)
                        }, 600)
                    },
                    500)
                }, 3500)
            }, 2000
        )
        }, 2000)
    }, 1000);

});



const link = document.getElementById('cadaslink');
const content = document.getElementById('content');
const bigforms = document.getElementById('bigforms');

link.addEventListener('click', function(){
    opacitydiv.classList.remove('opacityon');
    setTimeout(function(){
        content.classList.add('desaparecer');
        loaderMom.classList.add('animationloader');
        setTimeout(function(){
            loaderMom.classList.remove('addopacity');
            setTimeout(function(){
                loaderMom.style.display = "none";
                areaContent.style.display = "none";
                content.style.display = "none";
                bigforms.style.display = "flex";
                setTimeout(function(){
                    bigforms.classList.add('aparecendo');
                }, 1500)
            }, 500);
        }, 5500)
    }, 800);
})

const btsubmit = document.getElementById('submitbt');
const alertar = document.getElementById('alert');
const bigforms2 = document.getElementById('bigforms2');
const dinamicp = document.getElementById('dinamicp');
btsubmit.addEventListener('click', function(){
    const selecionado = document.querySelector('input[name="q1"]:checked');
    const selecionado2 = document.querySelector('input[name="q2"]:checked');
    const selecionado3 = document.querySelector('input[name="q3"]:checked');
    const selecionado4 = document.querySelector('input[name="q4"]:checked');
    const selecionado5 = document.querySelector('input[name="q5"]:checked');
    const selecionado6 = document.querySelector('input[name="q6"]:checked');
    const selecionado7 = document.querySelector('input[name="q7"]:checked');
    const selecionado8 = document.querySelector('input[name="q8"]:checked');
    const selecionado9 = document.querySelector('input[name="q9"]:checked');
    const selecionado10 = document.querySelector('input[name="q10"]:checked');
    const selecionado11 = document.querySelector('input[name="q11"]:checked');
    const selecionado12 = document.querySelector('input[name="q12"]:checked');
    if (selecionado === null || selecionado2 === null || selecionado3 === null || selecionado4 === null || selecionado5 === null || selecionado6 === null || selecionado7 === null || selecionado8 === null || selecionado9 === null || selecionado10 === null || selecionado11 === null || selecionado12 === null){
        alertar.classList.add('valores');
        bigforms.scrollTop = 1000;

    }
    else{
        bigforms.classList.remove('aparecendo');
        const executarAcao = () => {
            setTimeout(function(){
                bigforms.style.display = "none";
                bigforms2.style.display = "flex";
                setTimeout(function(){
                    bigforms2.classList.add('termos');
                    if (selecionado2.value === "Tipo 1" || selecionado3.value === "Poucas vezes" || selecionado4.value === "Não" || selecionado5.value === "Não" || selecionado6.value === "Não" || selecionado7.value === "Não" || selecionado8.value === "Ainda não sei bem" || selecionado9.value === "Não exatamente" || selecionado10.value === "Não" || selecionado11.value === "Não" || selecionado12.value === "Não exatamente"){
                        dinamicp.textContent = "identificamos que o seu perfil atual não é compatível com as nossas soluções de compostos ativos. Por que isso aconteceu? O uso de ingredientes que agem na redução do açúcar no sangue pode gerar riscos de hipoglicemia, especialmente em pacientes com Diabetes Tipo 1 (que dependem de insulina externa) ou que não possuem acompanhamento médico regular. Nossa recomendação: Por questões estritas de segurança e preservação da sua saúde, orientamos que você não consuma este produto sem que o seu médico endocrinologista ou nutricionista analise detalhadamente a nossa tabela de componentes e autorize formalmente o uso. Para entender melhor nossas diretrizes de segurança, você pode consultar nossos Termos de Uso e Política de Privacidade abaixo."
                    }
                    else{
                        dinamicp.textContent = "com base nas suas respostas, você se enquadra como perfil compatível com as nossas soluções. Ficamos felizes em fazer parte da sua rotina! Aviso de Segurança: Como você confirmou estar ciente de que nossas gomas contêm compostos ativos que afetam os níveis de açúcar no sangue, reforçamos a importância de consumi-las com cautela e atenção às orientações de uso. Acompanhamento: Este produto não substitui o tratamento médico. Monitore sua glicemia regularmente, conforme orientado pelo seu profissional de saúde, para evitar níveis muito baixos de açúcar no sangue (hipoglicemia). Ao prosseguir, você confirma que leu e concorda com os nossos Termos de Uso e Política de Privacidade descritos abaixo."
                    }
                }, 500)
            }, 1000)
        }
        executarAcao();
    }
});

const lastmenssage = document.getElementById('lastmenssage');
const submitbt2 = document.getElementById('submitbt2');
const checkdivision = document.getElementById("checkdivision");

submitbt2.addEventListener('click', function(){
    const selecionado13 = document.querySelector('input[name="okclick"]:checked');
    if (selecionado13 === null) {
        checkdivision.style.borderBottom = "red 2px solid"
    }
    else{
        bigforms2.classList.remove('termos');
        const executarAcao2 = () => {
            setTimeout(function(){
                bigforms2.style.display = "none";
                lastmenssage.style.display = "flex";
                setTimeout(function(){
                    lastmenssage.classList.add('classelegal');
                    setTimeout(function(){
                        window.location.replace("candyhome/index2.html");;
                    }, 2000)
                }, 500)
            }, 500)
        }
        executarAcao2();
    }
});










