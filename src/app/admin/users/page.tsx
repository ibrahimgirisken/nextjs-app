'use client'
import { useUsers } from '@/features/user/hooks/useUser'
import Link from 'next/link'
import { Button, Spinner, Table } from 'react-bootstrap'

export default function UserList() {
    const { data: users = [], isLoading, error } = useUsers();

    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <div>Hata: {error.message}</div>
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
