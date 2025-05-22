'use client'
import ProductForm from '@/features/product/components/ProductForm'
import { useRouter } from 'next/navigation'

export default function ProductAdd() {
    const router = useRouter()

    return (
        <>
            <h2>Ürün Ekleme Sayfası</h2>
            <ProductForm onSuccess={() => {
                console.log("Ürün eklendi")
                router.push('/admin/products')
            }} />
        </>
    )
}
