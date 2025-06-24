import api from '@/lib/axiosClient';
import { Product } from '@/features/product/types/product';

export const getProducts = (): Promise<Product[]> =>
  api.get('/products/all?IncludeAllLanguages=true').then((res) => res.data);
export const getProductsByLang = (lang: string): Promise<Product[]> =>
  api.get(`/products/all?Language=${lang}`).then((res) => res.data);
export const getProductById = (id: string): Promise<Product> =>
  api.get(`/products/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);
export const getProductByUrlAndLang = (url: string, lang: string): Promise<Product> =>
  api.get(`/products/by-url?Url=${url}&Language=${lang}`).then((res) => res.data);
export const createProduct = (data: Omit<Product, 'id'>) =>
  api.post('/products/add', data).then((res) => res.data);
export const updateProduct = (product: Product): Promise<Product> =>
  api.put(`/products/update`, product).then((res) => res.data);
export const deleteProduct = (id: string) => api.delete(`/products/${id}`).then((res) => res.data);
