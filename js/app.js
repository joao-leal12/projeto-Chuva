
    const teste = document.getElementById('readMore'); 
    const divisoria = document.querySelector('#divDinamica'); 
    const cadastro = document.querySelector('#CadastroDuvidas'); 
    const CriarTopicos = document.querySelector('#cadastrarTopico'); 
    const criador = document.querySelector('#criador')

        
    teste.addEventListener('click', ()=> {

        divisoria.classList.remove('contentresumo');    
        divisoria.classList.add('mostrarConteudo'); 
        teste.style.display = 'none'; 
    }); 


    CriarTopicos.addEventListener('click', ()=> {

        cadastro.classList.toggle('displayNone'); 
        criador.classList.toggle('displayNone'); 

    }); 

