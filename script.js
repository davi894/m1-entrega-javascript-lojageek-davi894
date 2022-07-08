
let arrayPaintings = [
   
    {
        img: "./assets/img/painting/clock.jpg",
        nome: "Clock",
        preco: 12.99,
    },
   
    {
        img: "./assets/img/painting/gamepad.jpg",
        nome: "Gamepad",
        preco: 12.99,
    },
   
    {
        img: "./assets/img/painting/personagem.jpg",
        nome: "Personagem",
        preco: 12.99,
    },
]


function listaProdutos(array) {



    for (let i = 0; i < array.length; i++) {

        let section = document.querySelector(".secaoPaintings")

        let ul = document.querySelector(".listaPaintings")
        let li = document.createElement('li')
        li.classList.add("produtosPaintings")

        let div = document.createElement('div')
        div.classList.add("detalhesPaintings")

        let imgUrl = document.createElement("img")
        imgUrl.classList.add("paintingsImg")
        imgUrl.src = `${array[i].img}`


        let nome = document.createElement("h3")
        nome.classList.add("nomePaintings")
        nome.innerText = `${array[i].nome}`


        let preco = document.createElement("h4")
        preco.classList.add("valorPaintings")
        preco.innerText = `${array[i].preco}`


        div.append(nome, preco)
        li.append(imgUrl, div)

        ul.appendChild(li)

        section.appendChild(ul)
    }

}

listaProdutos(arrayPaintings)

let arrayActionsFigures = [
    
    {
        img: "./assets/img/actions/animewoman.jpg",
        nome: "Anime Woman",
        preco: 15.99,

    },
    
    {
        img: "./assets/img/actions/dragonballpersonagem.jpg",
        nome: "Dragon Ball Personagem",
        preco: 15.99,
    },
    
    {
        img: "./assets/img/actions/starwarspersonagem.jpg",
        nome: "StarWars Personagem",
        preco: 15.99,
    },
]



function listaProdutosDois(array) {
    for (let i = 0; i < array.length; i++) {

        let section = document.querySelector(".secaoActionsFigures")
        
        let ul = document.querySelector(".listaActionsFigures")
        let li = document.createElement('li')
        li.classList.add("produtosActionsFigures")

        let div = document.createElement('div')
        div.classList.add("detalhesActionsFigures")

        let imgUrl = document.createElement("img")
        imgUrl.classList.add("ActionsFiguresImg")
        imgUrl.src = `${array[i].img}`


        let nome = document.createElement("h3")
        nome.classList.add("nomeActionsFigures")
        nome.innerText = `${array[i].nome}`


        let preco = document.createElement("h4")
        preco.classList.add("valorActionsFigures")
        preco.innerText = `${array[i].preco}`


        div.append(nome, preco)
        li.append(imgUrl, div)

        ul.appendChild(li)
        
        section.appendChild(ul)
        
    }
}

listaProdutosDois(arrayActionsFigures)





