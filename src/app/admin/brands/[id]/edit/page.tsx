'use client'
import { brandService } from '@/features/brand/api/brandService'
import BrandForm from '@/features/brand/components/BrandForm'
import { Brand } from '@/features/brand/types/brand'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

export default function BrandEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [brand, setBrands] = useState<Brand | null>(null)

    useEffect(() => {
        if (id) {
            brandService.getById(id as string).then(setBrands)
        }
    }, [id])

    return (
        <>
            <h2>Marka Düzenleme</h2>
            {brand && (
                <BrandForm initialData={brand}
                    onSuccess={() => {
                        console.log("Marka Güncellendi"),
                            router.push('/admin/brands')
                    }} />
            )}
        </>
    )
}
