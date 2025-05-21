import api from '@/lib/axiosClient';
import { Product } from '@/features/product/types/product';

export const getProducts = (): Promise<Product[]> =>
  api.get('/products/all?IncludeAllLanguages=true').then((res) => res.data);
export const getProductById = (id: string) => api.get(`/products/${id}`).then((res) => res.data);
export const createProduct = (product: any) =>
  api.post('/products', product).then((res) => res.data);
export const updateProduct = (id: string, product: any) =>
  api.put(`/products/${id}`, product).then((res) => res.data);
export const deleteProduct = (id: string) => api.delete(`/products/${id}`).then((res) => res.data);
