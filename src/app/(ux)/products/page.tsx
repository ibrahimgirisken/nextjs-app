'use client';
import { useProducts } from '@/hooks/useProducts'
import { Product, ProductTranslation } from '@/types/product';
import React from 'react'
const currentLang: 'tr' | 'en' | 'de' = 'tr';
function UXProductsPage() {
    const {data:products,isLoading,error}=useProducts()
    console.log(products)
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>
  return (
<>
<div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Ürünler</h1>
      <ul className="space-y-4">
        {products?.map((product: Product) => {
          const translation = product.productTranslations.find(
            (t) => t.langCode === currentLang
          );

          if (!translation) return null;

          return (
            <li
              key={product.id}
              className="bg-white shadow p-4 rounded"
            >
              <h2 className="text-lg font-bold">{translation.name}</h2>
              <p className="text-gray-500">{translation.brief}</p>
            </li>
          );
        })}
      </ul>
    </div>
</>  )
}

export default UXProductsPage