import axios from "axios";
import { BASE_URL, ENDPOINTS, PRODUCTS_PER_PAGE } from "./constants";
// додаємо дефолтно BASE_URL
axios.defaults.baseURL = BASE_URL;
// запит за категоріями
export async function fetchCategories() {    
    const { data } = await axios(ENDPOINTS.categories);
    return data;
}
export async function fetchAllProducts(page) {
    const skip = (page - 1) * PRODUCTS_PER_PAGE;
    const options = {
        params: {
            limit: PRODUCTS_PER_PAGE,
            skip,
    }}

    const { data } = await axios(ENDPOINTS.products, options);
    // const { data } = await axios(`${ENDPOINTS.products}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`);
    return data;
}
export async function fetchProductsByCategory(category, page = 1) {
    const skip = (page - 1) * PRODUCTS_PER_PAGE;
  
    const options = {
      params: {
        limit: PRODUCTS_PER_PAGE,
        skip,
      },
    };
  
    const { data } = await axios(
      `${ENDPOINTS.products}/category/${category}`,
      options
    );
  
    return data;
  }