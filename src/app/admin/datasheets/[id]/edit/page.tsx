'use client'
import { datasheetService } from "@/features/datasheet/api/datasheetService"
import DatasheetForm from "@/features/datasheet/components/datasheetForm"
import { Datasheet } from "@/features/datasheet/types/datasheet"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DatasheetEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [datasheet, setDatasheet] = useState<Datasheet | null>(null)

    useEffect(() => {
        if (id) {
            datasheetService.getById(id as string).then(setDatasheet)
        }
    }, [id])

    return (
        <>
            <h2>Ürün Düzenleme</h2>
            {datasheet && (
                <DatasheetForm initialData={datasheet}
                    onSuccess={() => {
                        console.log("Datasheet Güncellendi"),
                            router.push('/admin/datasheets')
                    }}
                />
            )}
        </>
    )
}
