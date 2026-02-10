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
//   запит за одним товаром по id
export async function fetchProductById(id) {
    try {
        const { data } = await axios.get(`${ENDPOINTS.products}/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
    }
}
// запит за пошуковим словом
export async function fetchProductsByQuery(query, page = 1) {
    const skip = (page - 1) * PRODUCTS_PER_PAGE;
    try {
        const { data } = await axios.get(`${ENDPOINTS.products}/search`, {
            params: {
                q: query,
                limit: PRODUCTS_PER_PAGE,
                skip,
            },
        });
        return data;
    } catch (error) {
        console.error('Помилка запиту пошуку:', error);
    }
}