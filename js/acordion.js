//guardar el estado (cards activa)
let cardsActive = 1;

//selecionar las columnas
const cards = document.querySelectorAll(".container__cards")

//Escuchar los "clicks" en cada cards

cards.forEach((cards,indice) => {
    cards.addEventListener('click',function() {
        selectionCards(indice);
    })

})

function selectionCards (indice) {
    cards[cardsActive].classList.remove("active")
    cards[indice].classList.add("active")
    cardsActive = indice
}



