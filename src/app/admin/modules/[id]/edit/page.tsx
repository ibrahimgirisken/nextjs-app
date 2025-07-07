'use client'
import { moduleService } from '@/features/module/api/moduleService';
import ModuleForm from '@/features/module/components/ModuleForm';
import { Module } from '@/features/module/types/module';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function moduleEdit() {
    const router = useRouter();
    const { id } = useParams();
    const [module, setModule] = useState<Module | null>(null);

    useEffect(() => {
        if (id) {
            moduleService.getById(id as string).then(setModule)
        }
    }, [id])

    return (
        <>
            {module && (
                <ModuleForm initialData={module} onSuccess={
                    () => {
                        console.log("Modül Güncellendi"),
                            router.push("/admin/modules")
                    }
                } />
            )}
        </>
    )
}
