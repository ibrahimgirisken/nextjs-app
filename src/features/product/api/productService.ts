import api from '@/lib/axiosClient';
import { Product } from '@/features/product/types/product';

export const getProducts = (): Promise<Product[]> =>
  api.get('/products/all?IncludeAllLanguages=true').then((res) => res.data);
export const getProductById = (id: string) =>
  api.get(`/products/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);
export const createProduct = (data: Omit<Product, 'id'>) =>
  api.post('/products', data).then((res) => res.data);
export const updateProduct = (product: Product) =>
  api.put(`/products/update`, product).then((res) => res.data);
export const deleteProduct = (id: string) => api.delete(`/products/${id}`).then((res) => res.data);
