import axios  from "axios";

export const apiInstance = axios.create({
    baseURL: "https://backend-abm-productos.onrender.com/api",
    withCredentials: false,
})
export const ingredientesInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APIURL}ingredientes`,
    withCredentials: true,
});

export const productosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APIURL}productos`,
    withCredentials: true,
});

