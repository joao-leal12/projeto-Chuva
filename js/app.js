
    const teste = document.getElementById('readMore'); 
    const divisoria = document.querySelector('#divDinamica'); 
    const cadastro = document.querySelector('#CadastroDuvidas'); 
    const CriarTopicos = document.querySelector('#cadastrarTopico'); 
    const criador = document.querySelector('#criador');
    const assunto = document.querySelector('#valueInput');
    const descricao = document.querySelector('#contentassunt'); 
    const enviar = document.querySelector('#enviarResposta');
    const answers = document.getElementById('answersTopics');
    const carregamento = document.querySelector('#Carregametoconcluido');
    const btnBack = document.getElementById('btnCarregamento'); 
    
    
    
    
     
    
    
    
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
        carregamento.classList.toggle('displayNone'); 
        cadastro.classList.toggle('displayNone'); 

            
        if(assunto.value !== '' && descricao.value !== ''){
              
           let assunts =  document.createElement('h3')
            let paragraph = document.createElement('p'); 
            let expan = document.createElement('span'); 
            let imagemUm = document.createElement('img'); 
            let imagemDois = document.createElement('img'); 
            let expanLike = document.createElement('span'); 
            let expanResposta = document.createElement('span'); 
            expan.classList.add('expansaoDinamica')
            assunts.classList.add('subtituloDinamico'); 
            paragraph.classList.add('paragrafoExpansao'); 
            expan.innerHTML = 'João Victor Leal Santos Cardoso'
            expan.classList.add('expansaoTopicos')
            imagemUm.src = '../assets/maisinformações.svg'; 
            imagemDois.src = '../assets/favoritar.svg' ; 
            expanLike.classList.add('like'); 
            expanResposta.classList.add('like'); 
            expanLike.innerHTML = '1 like'; 
            expanResposta.innerHTML = '3 resposta'; 
            
            
            
            
            
            assunts.innerHTML = assunto.value;
            paragraph.innerHTML = descricao.value; 
            
            
            answers.appendChild(assunts); 
            answers.appendChild(paragraph); 
            answers.insertBefore(expan, assunts.nextSibling); 
            answers.appendChild(imagemUm)
            answers.appendChild(imagemDois)
            answers.appendChild(expanLike)
            answers.appendChild(expanResposta)
            


        };     

        assunto.value = ''; 
        descricao.value = ''; 
            

    });


    btnBack.addEventListener('click', ()=> {

        carregamento.classList.toggle('displayNone'); 
        cadastro.classList.toggle('displayNone');    

    } );


    
    function aplicarEstilo() {

       let width =  window.innerWidth

            if(width <= 576){

                aplicandoEstilo(); 

            }

            
       
    }; 

 