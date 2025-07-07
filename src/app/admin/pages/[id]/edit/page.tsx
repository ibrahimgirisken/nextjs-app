'use client'
import { moduleService } from "@/features/module/api/moduleService"
import { pageService } from "@/features/page/api/pageService"
import PageForm from "@/features/page/components/PageForm"
import { Page } from "@/features/page/types/page"
import Module from "module"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function PageEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [page, setPage] = useState<Page | null>(null)
    const [modules, setModules] = useState<Module[]>([])


    useEffect(() => {
        moduleService.getAll()
            .then(setModules)
    }, [])

    useEffect(() => {
        if (id) {
            pageService.getById(id as string).then(setPage)
        }
    }, [id])



    return (
        <>
            <h2>Sayfa Düzenleme</h2>
            {page && (
                <PageForm initialData={page} moduleList={modules}
                    onSuccess={() => {
                        console.log("Sayfa Güncellendi"),
                            router.push('/admin/pages')
                    }}
                />
            )}
        </>
    )
}
