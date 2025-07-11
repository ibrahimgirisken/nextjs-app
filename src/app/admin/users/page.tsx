'use client'
import { userService } from '@/features/user/api/userService'
import { User } from '@/features/user/types/user'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Spinner, Table } from 'react-bootstrap'

export default function UserList() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation="border" />
    }
    return (

        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Kullanıcı Listesi</h2>
                <Link href="/admin/users/new">
                    <Button variant="primary">Yeni Kullanıcı Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>İsim & Soyisim</th>
                            <th>E-Posta Adresi</th>
                            <th>Mail</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.nameSurname}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        <Link href={`/admin/users/${user.id}/edit`}>
                                            <Button variant="warning" size="sm" className="me-2">
                                                Düzenle
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
