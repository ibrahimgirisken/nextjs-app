'use client'
import LangForm from '@/features/lang/components/LangForm'
import { langService } from '@/features/lang/hooks/langService'
import { Lang } from '@/features/lang/types/lang'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

export default function BrandEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [lang, setLang] = useState<Lang | null>(null)

    useEffect(() => {
        if (id) {
            langService.getById(id as string).then(setLang)
        }
    }, [id])

    return (
        <>
            <h2>Dil Düzenleme</h2>
            {lang && (
                <LangForm initialData={lang}
                    onSuccess={() => {
                        console.log("Dil Güncellendi"),
                            router.push('/admin/langs')
                    }} />
            )}
        </>
    )
}
