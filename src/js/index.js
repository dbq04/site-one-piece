
// exibe a lista  de botoes criados no html
const botoes= document.querySelectorAll('.botao');

const personagens= document.querySelectorAll('.personagem');

botoes.forEach((botao,indice)=>{
    botao.addEventListener("click",()=>{
        const botaoSelecionado=document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");
       // quando clica no icone do botao remove a descrisão do personagem que tinha para colocar  o que foi selecionado
        const personagemSelecionado=document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

       personagens[indice].classList.add("selecionado");
    });
});



