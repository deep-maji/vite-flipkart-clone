import products from "../api/smartphones.json";
import offersProducts from "../api/offers.json";
import { showProductCard, showOfferCard } from "./product";

// console.log(products[0].price);


showProductCard(products);
showOfferCard(offersProducts);