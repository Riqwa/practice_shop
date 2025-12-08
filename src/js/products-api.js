import axios from 'axios';


axios.defaults.baseURL = 'https://dummyjson.com';

export async function getCategories() {
    try{
        const info = await axios.get('/products/category-list')
        return info.data
    }
    catch(e){
        console.error(e);
    }
    
}

export async function getProduct() {
    const currentPage = 1;
    const params = {
        limit: 12,
        skip: (currentPage - 1) * 12
    }
    try{
        const res = await axios.get('/products', {params})
        return res.data.products
    }
    catch(e){
        console.error(e);
    }
}

export async function getCategory(textCategory) {
       const currentPage = 1;
    const params = {
        limit: 12,
        skip: (currentPage - 1) * 12
    }
    try{
     
        const res = await axios.get(`/products/category/${textCategory}`, {params})
        return res.data.products}
    
    catch(e){
        console.error(e);
    }
}
    
export async function getProductId(id) {
    try{
        const res = await axios.get(`/products/${id}`)
      
        
        return res.data
    }catch(e){
        console.error(e);
    }
    
}
export async function getQueryProduct(q ){
    const currentPage = 1;
    const params = {
        q,
        limit: 12,
        skip: (currentPage - 1) * 12
    }
    
    try{
        const res = await axios.get(`/products/search`, {params})
        return res.data.products
    }catch(e){
        console.error(e);
    }
}