
    const teste = document.getElementById('readMore'); 
    const divisoria = document.querySelector('#divDinamica'); 
    const cadastro = document.querySelector('#CadastroDuvidas'); 
    const CriarTopicos = document.querySelector('#cadastrarTopico'); 
    const criador = document.querySelector('#criador');
    const assunto = document.querySelector('#valueInput');
    const descricao = document.querySelector('#contentassunt'); 
    const enviar = document.querySelector('#enviarResposta')
    const answers = document.getElementById('answersTopics')
    let x = 0 
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
            

        }    

        assunto.value = ''; 
        descricao.value = ''; 
            

    });