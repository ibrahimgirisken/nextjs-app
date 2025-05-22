import { createCategory } from '@/features/category/api/categoryService'
import { Category } from '@/features/category/types/category'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function CategoryAdd() {
    const router = useRouter()
    const [category, setCategory] = useState<Category | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        createCategory()
            .then(setCategory)
            .finally(() => setLoading(false))
    }, [])
    return (
        <>
            <h2>Kategori Ekleme Sayfası</h2>
            <CategoryForm onSuccess={() => {
                console.log("Kategori Eklendi")
                router.push('/admin/categories')
            }} />
        </>
    )
}
