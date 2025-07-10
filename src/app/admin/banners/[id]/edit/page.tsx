'use client'
import { bannerService } from '@/features/banner/api/bannerService'
import BannerForm from '@/features/banner/components/BannerForm'
import { Banner } from '@/features/banner/types/banner'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

export default function BannerEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [banner, setBanner] = useState<Banner | null>(null)

    useEffect(() => {
        if (id) {
            bannerService.getById(id as string).then(setBanner)
        }
    }, [id])
    return (
        <>
            <h2>Banner Düzenleme</h2>
            {banner && (
                <BannerForm initialData={banner}
                    onSuccess={() => {
                        console.log("Banner Güncellendi"),
                            router.push('/admin/banners')
                    }} />
            )}
        </>
    )
}
