const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        } else{
            element.classList.remove(animationClass)
        }
    })
}
animeScroll()

if (target.length){
window.addEventListener('scroll', function(){
    animeScroll();
})
}

/** FIM DAS ANIMAÇÕES  */

let ativar_conteudo = document.getElementById('quem_eu_sou')
let conteudo_quem_sou = document.getElementById('conteudo_block')
ativar_conteudo.addEventListener('click',()=>{
    if(conteudo_quem_sou.style.display=='block'){
        conteudo_quem_sou.style.display='none'
    }else{
        conteudo_quem_sou.style.display='block'
    }
})

let fechar_sobre = document.getElementById('fechar_quem_sou')
fechar_sobre.addEventListener('click',()=>{
    if(conteudo_quem_sou.style.display=='none'){
        conteudo_quem_sou.style.display='block'
    }else{
        conteudo_quem_sou.style.display='none'
    }
})