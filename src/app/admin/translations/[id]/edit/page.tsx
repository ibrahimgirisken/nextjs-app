'use client'
import { translateService } from '@/features/translate/api/translateService'
import TranslateForm from '@/features/translate/components/TranslateForm'
import { TranslateKey } from '@/features/translate/types/translate'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function TranslationEdit() {

    const router = useRouter()
    const { id } = useParams()
    const [translation, setTranslation] = useState<TranslateKey | null>(null)

    useEffect(() => {
        if (id) {
            translateService.getById(id as string).then(setTranslation)
        }
    }, [id])

    return (
        <>
            <h2>Dil Değer Düzenleme</h2>
            {translation && (
                <TranslateForm initialData={translation}
                    onSuccess={() => {
                        console.log("Dil Değeri Güncellendi"),
                            router.push('/admin/translations')
                    }}
                />
            )}
        </>
    )
}
