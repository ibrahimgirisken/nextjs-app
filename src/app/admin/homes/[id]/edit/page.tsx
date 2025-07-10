'use client'
import { homeService } from "@/features/home/api/useHome"
import HomeForm from "@/features/home/components/HomeForm"
import { Home } from "@/features/home/types/home"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function HomeEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [home, setHomes] = useState<Home | null>(null)

    useEffect(() => {
        if (id) {
            homeService.getById(id as string).then(setHomes)
        }
    }, [id])



    return (
        <>
            <h2>Sayfa Düzenleme</h2>
            {home && (
                <HomeForm initialData={home}
                    onSuccess={() => {
                        console.log("Sayfa Güncellendi"),
                            router.push('/admin/homes')
                    }}
                />
            )}
        </>
    )
}
