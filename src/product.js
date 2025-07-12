const cardsContainerProduct = document.querySelector("#cards-container-product");
const offerCardsDiv = document.querySelector("#offer-cards-div");
const cardsTemplate = document.querySelector("#cards-template");


export const showProductCard = (cards) => {
    
    cards.forEach((card) => {
        const {image_url, price , model} = card;

        // Its Making a clone
        const productClone = document.importNode(cardsTemplate.content, true);
        productClone.querySelector(".cards-img").src = image_url;
        productClone.querySelector(".cards-title").textContent = model;
        productClone.querySelector(".cards-info").textContent = price;

        cardsContainerProduct.append(productClone);

    });
}

export const showOfferCard = (cards)=>{
    cards.forEach((card) => {
        const {image , price, title} = card;

        const offersCardclone = document.importNode(cardsTemplate.content, true);
        offersCardclone.querySelector(".cards-img").src = image;
        offersCardclone.querySelector(".cards-title").textContent = title;
        offersCardclone.querySelector(".cards-info").textContent = price;

        offerCardsDiv.append(offersCardclone);
    })
}