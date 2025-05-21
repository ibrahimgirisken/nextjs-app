'use client'
import { createProduct } from '@/features/product/api/productService'
import { useEffect, useState } from "react"
import ProductForm from '@/features/product/components/ProductForm'
import { Product } from '@/features/product/types/product'
import { useRouter } from 'next/navigation'

export default function ProductAdd() {
    const router = useRouter()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        createProduct()
            .then(setProduct)
            .finally(() => setLoading(false))
    }, [])
    return (
        <>
            <h2>Ürün Ekleme Sayfası</h2>
            <ProductForm onSuccess={() => {
                console.log("Ürün eklendi")
                router.push('/admin/products')
            }
            } />
        </>
    )
}
