
    const teste = document.getElementById('readMore'); 
    const divisoria = document.querySelector('#divDinamica'); 
    const cadastro = document.querySelector('#CadastroDuvidas'); 
    const CriarTopicos = document.querySelector('#cadastrarTopico'); 
    const criador = document.querySelector('#criador');
    const assunto = document.querySelector('#valueInput');
    const descricao = document.querySelector('#contentassunt'); 
    const enviar = document.querySelector('#enviarResposta')
    const answers = document.getElementById('answersTopics')
    teste.addEventListener('click', ()=> {

        divisoria.classList.remove('contentresumo');    
        divisoria.classList.add('mostrarConteudo'); 
        teste.style.display = 'none'; 
    }); 


    CriarTopicos.addEventListener('click', ()=> {

        cadastro.classList.toggle('displayNone'); 
        criador.classList.toggle('displayNone'); 

    }); 
 
    

    enviar.addEventListener('click', e => {
        e.preventDefault(); 
            
            
        if(assunto.value !== '' && descricao.value !== ''){
               
           let assunts =  document.createElement('h3')
            let paragraph = document.createElement('p'); 
            let expan = document.createElement('span'); 
            expan.classList.add('expansaoDinamica')
            assunts.classList.add('subtituloDinamico'); 
            paragraph.classList.add('paragrafoExpansao'); 
            assunts.innerHTML = assunto.value;
            paragraph.innerHTML = descricao.value; 
            
            
            answers.appendChild(assunts); 
            answers.appendChild(paragraph); 

            

        }    

        assunto.value = ''; 
        descricao.value = ''; 
            

    });