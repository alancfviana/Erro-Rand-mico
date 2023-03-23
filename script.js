const sorte = () => {sorte
    return new Promise((resolve, reject) => {
        const aleatorio = Math.random()
        let verdade = false
        if(aleatorio < 0.5){
            verdade = false
        }else{
            verdade = true
        }
        console.log(verdade)
        if(verdade){
            //console.log("nao")
            const imagem = "https://i.pinimg.com/originals/06/5e/91/065e912c6cfb614a9de0f669de2fb5f2.jpg"
            resolve(imagem)
        }else{
            //console.log("sim")
            const imagem = "https://tse1.mm.bing.net/th?id=OIP.YGJyDYhXDmKorpYTPiW5EgHaFj&pid=Api&P=0"
            reject(imagem)
        }
    })
}
const imagem = document.createElement('img')
const botao = document.querySelector(`button`)
botao.addEventListener(`click`, async () => {
    
    if(imagem.src==''){
    }else{
        root.removeChild(imagem)
        
             
    }
    try {
        const resposta = await sorte()
        imagem.src = resposta
    }catch(error){
        imagem.src = error
    }
    finally{
        // console.log("FIm")
        setTimeout(() => {            
            root.appendChild(imagem)
        }, 100);
    }
})