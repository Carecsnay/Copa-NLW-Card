let isIgnite = true;

function changeCard(event) {
    /* Inspecionando Evento*/
    // console.log(event.currentTarget) (tem que colocar no html tbm o param.)
    
    const card = event.currentTarget;
    const backgroundImage = isIgnite ? "url(./assets/bg-explorer.svg)" : "url(./assets/bg-ignite.svg)";
    
    isIgnite = !isIgnite;
    
    card.style.backgroundImage = backgroundImage;
}


