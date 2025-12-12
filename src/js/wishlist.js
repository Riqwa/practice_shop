import {getProductId} from './products-api'
import {refs} from './refs'

import {handleProducts} from './handlers'
if(localStorage.getItem("Wishlist")){
refs.navWishlistCount.textContent = JSON.parse(localStorage.getItem("Wishlist")).length
}else{
  refs.navWishlistCount.textContent = '0'
}
if(localStorage.getItem("cart")){
refs.navCartCount.textContent = JSON.parse(localStorage.getItem("cart")).length
}else{
  refs.navCartCount.textContent = '0'
}









async function showWishlist() {
    const wishlistItem = JSON.parse(localStorage.getItem("Wishlist"))
    //if(!wishlistItem)return
    const promises = wishlistItem.map(id => getProductId(id))
    const itemsProducts = await Promise.all(promises)
    const markup = itemsProducts.map(product => `<li class="products__item" data-id="${product.id}"><img class="products__image" width="200" src="${product.images}" alt="#"/><p class="products__title">${product.title}</p><p class="products__brand"><span class="products__brand--bold">Brand:</span>${product.brand}</p><p class="products__category">Category: ${product.category}</p><p class="products__price">Price: ${product.price}$</p></li>`).join('')
    refs.products.insertAdjacentHTML('beforeend', markup)

    
    
}
showWishlist()
handleProducts()
