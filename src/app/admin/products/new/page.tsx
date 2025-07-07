'use client'
import { brandService } from '@/features/brand/api/brandService'
import { Brand } from '@/features/brand/types/brand'
import { categoryService } from '@/features/category/api/categoryService'
import { Category } from '@/features/category/types/category'
import ProductForm from '@/features/product/components/ProductForm'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductAdd() {
    const router = useRouter()
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

    return (
        <>
            <h2>Ürün Ekleme Sayfası</h2>
            <ProductForm categoryList={categories} brandList={brands} onSuccess={() => {
                console.log("Ürün eklendi")
                router.push('/admin/products')
            }} />
        </>
    )
}
