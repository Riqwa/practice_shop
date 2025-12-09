import {getCategories, getProduct,getProductId} from './products-api'
import {refs} from './refs'



function clear(){
  refs.products.innerHTML=""
}
export async function createCategories(){
  try{
    const categories = await getCategories()
    const markup = categories.map(category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button></li>`).join('')
   refs.categories.insertAdjacentHTML("beforeend", markup)
   
  }
  catch(e){
    console.error(e);
  }
}

  
export async function showProducts() {
  try{
  const products = await getProduct()
  const markup = products.map(product => `<li class="products__item" data-id="${product.id}"><img class="products__image" width="200" src="${product.images}" alt="#"/><p class="products__title">${product.title}</p><p class="products__brand"><span class="products__brand--bold">Brand:</span>${product.brand}</p><p class="products__category">Category: ${product.category}</p><p class="products__price">Price: ${product.price}$</p></li>`).join('')
  clear()
   refs.products.insertAdjacentHTML('beforeend', markup)
  }
  catch(e){
    console.error(e);
  }
}

export  function showCategory(products) { 
  const markup = products.map(product => `<li class="products__item" data-id="${product.id}"><img class="products__image" width="200" src="${product.images}" alt="#"/><p class="products__title">${product.title}</p><p class="products__brand"><span class="products__brand--bold">Brand:</span>${product.brand}</p><p class="products__category">Category: ${product.category}</p><p class="products__price">Price: ${product.price}$</p></li>`).join('')
  clear()
  refs.products.insertAdjacentHTML('beforeend', markup)
 

}

export async function showProductId(id){
  const product = await getProductId(id)
  const markup = `<img class="modal-product__img" src="${product.images}" alt="#" />
      <div class="modal-product__content" data-id="${product.id}">
        <p class="modal-product__title">${product.title}</p>
        <ul class="modal-product__tags">${product.tags.map(tag =>tag).join(",")}</ul>
        <p class="modal-product__description">${product.description}</p>
        <p class="modal-product__shipping-information">Shipping: ${product.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${product.returnPolicy}</p>
        <p class="modal-product__price">Price: ${product.price}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`

refs.modalContent.innerHTML = markup 
}



     