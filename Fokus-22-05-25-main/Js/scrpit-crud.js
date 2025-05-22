const addTask = document.querySelector(".app__button--add-task");
const formHidden = document.querySelector(".hidden")
const textArea = document.querySelector(".app__form-textarea")
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let ul = document.querySelector(".app__section-task-list")
const lista_tarf = document.querySelector(".app__section-task-header__ul")
const buttonCancelEdit = document.querySelector(".app__form-footer__button--cancel-edit")

const buttonAddEdit = document.querySelector(".app__form-footer__button--confirm-edit")
const inputAddEdit = document.querySelector(".app__form-textarea-edit")
const deletButtonEdit = document.querySelector(".app__form-footer__button--delete-edit")
const ulLista = document.querySelectorAll("li");
let liSelecionada = null;
const buttonRemoverConcluidas = document.querySelector("#btn-remover-concluidas");


addTask.addEventListener("click", (event) => {
    formHidden.classList.toggle("hidden")
})

function atualizar(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function atualizarEdit() {
    let verificacaoLocalStorage = localStorage.setItem('tarefas', JSON.stringify(tarefas));
    return console.log(verificacaoLocalStorage);
}

function criarTarefa(tarefa) {

    const li = document.createElement("li");
    li.classList.add("app__section-task-list-item");

    const svg = document.createElement('svg');
    
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `;


    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descrition;
    paragrafo.classList.add("app__section-task-list-item-description")

    const botao = document.createElement("button")
    botao.classList.add('app_button-edit')

    const img = document.createElement('img')
    //img.classList.add("imgLi")
    img.setAttribute("src", "/imagens/edit.png");

    botao.append(img)

    img.addEventListener('click', () => {
        let hidden = document.querySelector(".hiddenn");
        hidden.style.display = "block"; //("hiddenn");
        inputAddEdit.value = paragrafo.textContent;
        //if(ulLista[0].onclick) {
            //console.log(tarefas[0])
        //}

        buttonAddEdit.addEventListener("click", (event) => {
            
            event.preventDefault();
            if (inputAddEdit.value === "") {
                alert('Digita algo');
            }
            else {
                const valorEditado = paragrafo.textContent = inputAddEdit.value;
                const tarefa = {
                    descrition: valorEditado
                }
                tarefas.push(tarefa);
                atualizar();
                hidden.style.display = "none";

                //if(ulLista[0].onclick) {
                    //console.log(tarefas[0])
                //}
            }
        })
        buttonCancelEdit.addEventListener('click', () => {
            let hidden = document.querySelector(".app__form-add-taskk");
            hidden.style.display = "none"; //("hiddenn");
        });

        deletButtonEdit.onclick = () => {
            // remove the li permanently
            let valorEditado = paragrafo.textContent = inputAddEdit.value;
            //const indexValorEditado = tarefas;

            for (let i = 0; i < tarefas.length; i++) {

                if (tarefas[i].descrition === valorEditado) {
                    // delete item from the list [tarefas] with the [i] of the [for];
                    console.log(`Solicitação feita! "${tarefas[i].descrition}" apagada do nosso sistema !!`);
                    let log = tarefas.splice(i, 1);
                    atualizarEdit();
                    console.log(log);
                    li.remove();
                }
            }
            //const tarefa = {
                //descrition: valorEditado
            //}

            let hidden = document.querySelector(".app__form-add-taskk");
            hidden.style.display = "none";
        };
    })



    let svgLi = li.append(svg);
    let paragrafoLi = li.append(paragrafo);
    let botaoLi = li.append(botao);
    let imgLi = li.append(img);

    const activeLi = li.onclick = () => {
        
        // Do to the [#Em andamento], passeding to the [paragrafoDescription];
        
        let paragrafoDescription = document.querySelector(".app__section-active-task-description");

        li.classList.add("app__section-task-list-item-active");
        svg.onclick = () => {
            li.classList.add("app__section-task-list-item-complete");
            //li.classList.toggle("app__section-task-list-item-complete");
            svg.addEventListener("click", () => {
                li.classList.remove("app__section-task-list-item-complete");
                
                li.addEventListener("click", () => {
                    li.classList.remove("app__section-task-list-item-active");
                });
            });
        }
    }

    //const activeImg = img.onmouseover = () => {
        //img.style.backgroundColor = "white";
        //img.style.borderRadius = "1px 2px 1px transparent";

    //}
    
    buttonRemoverConcluidas.addEventListener("click", (event) => {
        //Lists Li
        const liList = document.querySelectorAll("li.app__section-task-list-item");
        for (let o = 0; o < tarefas.length; o++) {

            //console.log(liList.length);

            for (let u = 0; u < liList.length; u++) {
                if (liList[u].classList[2] === "app__section-task-list-item-complete") {
                    
                    //console.log(u)
                    try {
                        
                        event.preventDefault()
                        tarefas.splice(o, 1);
                        liList[u].remove();
                        console.log("Trabalho totalmente completo")
                        atualizarEdit()

                    } catch (error) {
                        console.log("eroo");
                        console.log(error);
                    }
                    
                    
                    
                }
                
            }
            
        }
    }) 


    return li;


}

formHidden.addEventListener("submit", (event) => {
    event.preventDefault();

    const valor = textArea.value;

    const tarefa = {
        descrition: valor
    }
    tarefas.push(tarefa);

    const elementoTarefa = criarTarefa(tarefa)
    ul.append(elementoTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    textArea.value = ''
    formHidden.classList.add("hidden")
}) 

tarefas.forEach(tarefa => {
    const elementoTarefa = criarTarefa(tarefa);
    ul.append(elementoTarefa)
});
    
function edit() {
    let hidden = document.querySelector(".hiddenn")
    hidden.classList.toggle("hiddenn")
}

