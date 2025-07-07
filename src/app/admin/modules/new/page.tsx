'use client'
import ModuleForm from '@/features/module/components/ModuleForm';
import { useRouter } from 'next/navigation'

export default function ModuleAdd() {
    const router = useRouter();

    return (
        <>
            <ModuleForm onSuccess={() => {
                console.log("Module eklendi")
                router.push('/admin/modules')
            }} />
        </>
    )
}
