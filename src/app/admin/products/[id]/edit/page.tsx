'use client'
import { brandService } from "@/features/brand/api/brandService"
import { Brand } from "@/features/brand/types/brand"
import { categoryService } from "@/features/category/api/categoryService"
import { Category } from "@/features/category/types/category"
import { productService } from "@/features/product/api/productService"
import ProductForm from "@/features/product/components/ProductForm"
import { Product } from "@/features/product/types/product"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const [categories, setCategories] = useState<Category[]>([])
    const [brands, setBrands] = useState<Brand[]>([])

    useEffect(() => {
        categoryService.getAll()
            .then(setCategories)
    }, [])

    useEffect(() => {
        brandService.getAll()
            .then(setBrands)
    }, [])

    useEffect(() => {
        if (id) {
            productService.getById(id as string).then(setProduct)
        }
    }, [id])



    return (
        <>
            <h2>Ürün Düzenleme</h2>
            {product && (
                <ProductForm initialData={product} categoryList={categories} brandList={brands}
                    onSuccess={() => {
                        console.log("Ürün Güncellendi"),
                            router.push('/admin/products')
                    }}
                />
            )}
        </>
    )
}
