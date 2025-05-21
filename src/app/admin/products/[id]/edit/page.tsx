'use client'
import { getProductById } from "@/features/product/api/productService"
import ProductForm from "@/features/product/components/ProductForm"
import { Product } from "@/features/product/types/product"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductEdit() {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    useEffect(() => {
        if (id) {
            getProductById(id as string).then(setProduct)
        }
    }, [id])
    return (
        <>
            <h2>Ürün Düzenleme</h2>
            {product && (
                <ProductForm initialData={product}
                    onSuccess={() => {
                        console.log("Ürün güncellendi")
                    }}
                />
            )}
        </>
    )
}
