const descansoCurto = document.querySelector(".app__card-button--curto");
const descansoLongo = document.querySelector(".app__card-button--longo");
const foco = document.querySelector(".app__card-button--foco");
const fotoDescanso = document.querySelector(".app__image");
const checkBox = document.querySelector(".toggle-checkbox")
const playSound = document.querySelectorAll(".play-checked, .pause-checked, .beep-checked, .luna-checked");
const comecar = document.querySelector("#start-pause");
const pause = document.querySelector("#pause");
let contado = document.querySelector(".toggle-switch").innerHTML;
const title = document.querySelector(".app__title");
let startValue = document.querySelector(".valor-botao-start").textContent;

let timer = document.querySelector("#timer");


function contagemFoco() {
    let time = 250000;

    for (let i = 0; time >= i;) {
        setTimeout(console.log(time.toFixed(0)/1000), 1000);
        time - 1000;
    }
}
function contagemDescansoCurto() {
    let time = 50000;

    for (let i = 0; time >= i;) {
        setTimeout(console.log(time.toFixed(0)/1000), 1000);
        time - 1000;
    }
}
function contagemDescansoLongo() {
    let time = 1500000;

    for (let i = 0; time > i;) {
        tempo = setInterval(console.log(time.toFixed(0)/1000), 1000);

        time - 1000;

        pause.addEventListener("click", (event) => {
            clearInterval(tempo)
        })
        
    }
}
function contagem(time, verdadeiro) {
    if (verdadeiro === true) {
        for (let i = 0; time > i;) {

            setInterval(console.log(time.toFixed(0)/1000), 1000);
            time - 1000;
            pause.addEventListener("click", () => {
                verdadeiro = false;
            });
        }
    }
}
function ativarTemporizador(valor) {
    
    //valor = valor + new Date().toLocaleTimeString('pt-Br', {minute : '2-digit', second: '2-digit'});
    const valorCompilado = new Date(valor);
    //const tempo = valorCompilado.toTimeString('pt-Br', {minute : '2-digit', second: '2-digit'});
    comecar.textContent = "Começar";
    contado = valorCompilado;
    temporizador = setInterval(() => {
        
        let soma = contado -= 1;
        let print = timer.innerHTML = soma;
        //console.log(print)
        
        console.log(soma);

        //pause.addEventListener("click", paralisar);

    }, 1000);
    
}

function paralisar() {
    clearInterval(temporizador);
    comecar.textContent = `Voltar`;
    console.log(startValue);
}


descansoCurto.addEventListener("click", () => {
    //document.querySelectorAll("html").forEach(html =>{
        //html.classList.add("active")
    //})

    let time = 300;
    document.querySelectorAll("html").forEach(html => {

        descansoCurto.classList.add("active");
        html.setAttribute("data-contexto", "descanso-curto");
        fotoDescanso.setAttribute("src", "../imagens/descanso-curto.png");

        title.innerHTML = `<h1 class="app__title">
                Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta!.</strong>
            </h1>`;

        if (foco.classList[2] === "active") {
            foco.classList.remove("active");
        }
        else if(descansoLongo.classList[2] === "active") {
            descansoLongo.classList.remove("active");
        }
        
        
        comecar.addEventListener("click", () => {
            const check = checkBox.checked;

            if(check) {
                playSound[0].play();
            }
            else {
                playSound[0].pause();
            }

            ativarTemporizador(time);
            
        });

        pause.addEventListener("click", () =>{
            const check = checkBox.checked;

            if(check) {
                playSound[1].play();
            }
            else {
                playSound[1].pause();
            }
        })

    });
    
});

foco.addEventListener("click", () =>{

    let time = 1500
    document.querySelectorAll("html").forEach(html => {
        foco.classList.add("active");
        html.setAttribute("data-contexto", "foco");
        
        title.innerHTML = `<h1 class="app__title">
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">Mergulhe no que importa.</strong>
            </h1>`

        fotoDescanso.setAttribute("src", "../imagens/foco.png");

        if (descansoCurto.classList[2] === "active") {
            descansoCurto.classList.remove("active");
        }
        else if(descansoLongo.classList[2] === "active") {
            descansoLongo.classList.remove("active");
        }

        comecar.addEventListener("click", () =>{
            const check = checkBox.checked;

            if(check) {
                playSound[0].play();
            }
            else {
                playSound[0].pause();
            };
            
            ativarTemporizador(time)

        });

        pause.addEventListener("click", () =>{
            const check = checkBox.checked;

            if(check) {
                playSound[1].play();
            }
            else {
                playSound[1].pause();
            }

            paralisar()

        });
        
    });;
});

descansoLongo.addEventListener("click", () => {

    let time = 900
    document.querySelectorAll("html").forEach(html => {
        descansoLongo.classList.add("active");
        html.setAttribute("data-contexto", "descanso-longo");

        title.innerHTML = `<h1 class="app__title">
                Hora de voltar a superfice,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            </h1>`

        fotoDescanso.setAttribute("src", "../imagens/descanso-longo.png");
        if (descansoCurto.classList[2] === "active") {
            descansoCurto.classList.remove("active");
        }
        else if(foco.classList[2] === "active"){
            foco.classList.remove("active");
        }

        comecar.addEventListener("click", () => {
            const check = checkBox.checked;

            if (check) {
                playSound[0].play();
            }
            else {
                playSound[0].pause();
            }
            
            ativarTemporizador(time);

            
            
            //let valor = true;
            //contagem(150000, valor);
            
            //pause.addEventListener('click', () => {
                //valor = false;
                //})
                
            });
        

        pause.addEventListener("click", () =>{
            const check = checkBox.checked;

            if(check) {
                playSound[1].play();
            }
            else {
                playSound[1].pause();
            }

            paralisar();
        });

        
    });
});



