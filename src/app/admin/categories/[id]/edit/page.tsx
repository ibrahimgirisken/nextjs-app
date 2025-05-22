'use client'
import { getCategoryById } from '@/features/category/api/categoryService'
import CategoryForm from '@/features/category/components/CategoryForm'
import { Category } from '@/features/category/types/category'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function CategoryEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [category, setCategory] = useState<Category | null>(null)

    useEffect(() => {
        if (id) {
            getCategoryById(id as string).then(setCategory)
        }
    }, [id])
    return (
        <>
            <h2>Kategori Düzenleme</h2>
            {category && (
                <CategoryForm initialData={category}
                    onSuccess={() => {
                        console.log("Kategori Güncellendi"),
                            router.push('/admin/categories')
                    }} />
            )}
        </>
    )
}
