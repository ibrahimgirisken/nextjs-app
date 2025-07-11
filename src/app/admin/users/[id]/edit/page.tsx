'use client'
import { userService } from '@/features/user/api/userService'
import UserForm from '@/features/user/component/UserForm'
import { User } from '@/features/user/types/user'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function UserEdit() {
    const router = useRouter()
    const { id } = useParams()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        if (id) {
            userService.getById(id as string).then(setUser)
        }
    }, [id])
    return (
        <>
            <h2>Kullanıcı Düzenleme</h2>
            {user &&
                <UserForm initialData={user} onSuccess={() => {
                    console.log("Kullanıcı Güncellendi"),
                        router.push("/admin/users")
                }} />
            }
        </>
    )
}
