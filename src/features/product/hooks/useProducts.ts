import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as productService from '@/features/product/api/productService';
import { Product } from '@/features/product/types/product';

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => productService.getProducts(),
  });
}

export function useProductsByLang(locale: string) {
  return useQuery<Product[]>({
    queryKey: ['products', locale], // locale'i de ekledik
    queryFn: () => productService.getProductsByLang(locale),
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productService.createProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: { data: Product }) => productService.updateProduct(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => productService.deleteProduct(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  });
}
