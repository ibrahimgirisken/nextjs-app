'use client'
import { settingService } from "@/features/setting/api/settingService"
import SettingForm from "@/features/setting/components/SettingForm"
import { Setting } from "@/features/setting/types/setting"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SettingEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [setting, setSetting] = useState<Setting | null>(null)

    useEffect(() => {
        if (id) {
            settingService.getById(id as string).then(setSetting)
        }
    }, [id])
    return (
        <>
            <h2>Ayarları Düzenle</h2>
            {setting && (
                <SettingForm initialData={setting}
                    onSuccess={() => {
                        console.log("Ayarlar Güncellendi"),
                            router.push('/admin')
                    }}
                />
            )}
        </>
    )
}
