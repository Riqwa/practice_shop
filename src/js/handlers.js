import {getCategory, getQueryProduct} from './products-api'
import { showCategory, showProducts, showProductId} from './render-functions';
import {refs} from './refs'


export  function handleCategory() {
   
    refs.categories.addEventListener('click', onClick)
  
  
}
  async function onClick(e){
  
     let textCategory;
        if(e.target.nodeName !== "BUTTON") return
        textCategory = e.target.textContent
        if(textCategory === "All"){
            showProducts()
        }else{
        const buttons = document.querySelectorAll(".categories__btn")
        buttons.forEach(b => b.classList.remove('categories__btn--active'))
        e.target.classList.add('categories__btn--active')
        const data = await getCategory(textCategory)
        showCategory(data)
        if(data.length === 0){
            const notFound = document.querySelector('.not-found')
            notFound.classList.add('not-found--visible')
        }

        }
    }

export  function handleProducts() {
   
    refs.products.addEventListener('click', onClickProduct)
  
}

async function onClickProduct(e){
    const li = e.target.closest('li')
    if(!li) return
    const id = li.dataset.id
     await showProductId(id)
       let value = JSON.parse(localStorage.getItem("cart")) || [];
      openModal(id, value)
      handleCloseBtn()
      handleAddCart(id)
}


 function openModal(id, value) {
if(value.includes(id)){refs.btnAddCart.textContent = "Remove from Cart"}else{refs.btnAddCart.textContent = "Add to Cart"}
  refs.modal.classList.add("modal--is-open");
  document.addEventListener("keydown", onEscClose);
}

function handleCloseBtn (){
    refs.modalClose.addEventListener('click', e => closeModal())
}

export function closeModal() {
  refs.modal.classList.remove("modal--is-open");
  document.removeEventListener("keydown", onEscClose);
}

function onEscClose(e) {
  if (e.key === "Escape") {
    closeModal();
    refs.modalContent.innerHTML = ""
    
  }
}

export  function handleQuery() {
   
    refs.form.addEventListener('submit', onSubmit)
}

async function onSubmit(e){
    e.preventDefault()
    let q = e.target.elements.searchValue.value
    if(!q.trim())return
    const products = await getQueryProduct(q)
    showCategory(products)
    e.target.reset()
    if(products.length === 0){
            const notFound = document.querySelector('.not-found')
            notFound.classList.add('not-found--visible')
        }
}
export  function handleformBtn() {
   
    refs.formBtn.addEventListener('click', e =>{
        showProducts()
        refs.form.reset()

    } )
}

export  function handleAddCart(id) {
    refs.btnAddCart.replaceWith(refs.btnAddCart.cloneNode(true));
    refs.btnAddCart = document.querySelector('.modal-product__btn--cart'); 
    refs.btnAddCart.addEventListener('click', onClickCart)

    function onClickCart(e){
        let value = JSON.parse(localStorage.getItem("cart")) || [];
        if (!value.includes(id)) {
      value.push(id);
      refs.btnAddCart.textContent = 'Remove from Cart';
    } else {
      value = value.filter(item => item !== id);
      refs.btnAddCart.textContent = 'Add to Cart';
    }

    localStorage.setItem("cart", JSON.stringify(value));
  }
}



