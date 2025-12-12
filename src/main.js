import './css/style.css'
import {createCategories, showProducts} from './js/render-functions'
import { handleCategory, handleProducts,closeModal, handleQuery, handleformBtn} from './js/handlers'

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
createCategories()
showProducts()
handleCategory()
handleProducts()
handleQuery()
closeModal()
handleformBtn()
