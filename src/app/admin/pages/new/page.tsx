'use client'
import { moduleService } from '@/features/module/api/moduleService'
import { Module } from '@/features/module/types/module'
import PageForm from '@/features/page/components/PageForm'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function PageAdd() {
    const router = useRouter()
    const [modules, setModules] = useState<Module[]>([])

    useEffect(() => {
        moduleService.getAll()
            .then(setModules)
    }, [])

    return (
        <>
            <h2>Sayfa Ekleme</h2>
            <PageForm moduleList={modules} onSuccess={() => {
                console.log("Sayfa eklendi")
                router.push('/admin/pages')
            }} />
        </>
    )
}
