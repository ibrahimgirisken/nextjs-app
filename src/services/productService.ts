import api from '@/lib/axiosClient';
import { Product } from '@/types/product';

export const getProducts = ():Promise<Product[]> => api.get('/products/all?IncludeAllLanguages=true').then(res => res.data);
export const getProductById = (id: number) => api.get(`/products/${id}`).then(res => res.data);
export const createProduct = (product: any) => api.post('/products', product).then(res => res.data);
export const updateProduct = (id: number, product: any) => api.put(`/products/${id}`, product).then(res => res.data);
export const deleteProduct = (id: number) => api.delete(`/products/${id}`).then(res => res.data);
