'use client'
import ProductForm from '@/features/product/components/ProductForm'
import React from 'react'

export default function ProductAdd() {
    return (
        <>
            <h2>Ürün Ekleme Sayfası</h2>
            <ProductForm onSuccess={() => {
                console.log("Ürün eklendi");
            }
            } />
        </>
    )
}
