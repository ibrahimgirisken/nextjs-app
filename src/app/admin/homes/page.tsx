'use client'

import { homeService } from "@/features/home/api/homeService"
import { Home } from "@/features/home/types/home"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Spinner, Table } from "react-bootstrap"

export default function HomeList() {
    const [homes, setHomes] = useState<Home[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        homeService.getAll()
            .then(setHomes)
            .finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <Spinner animation="border" />
    }
    return (

        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Anasayfa İçerikleri Listesi</h2>
                <Link href="/admin/homes/new">
                    <Button variant="primary">Yeni Sayfa Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Kod</th>
                            <th>Ad (TR)</th>
                            <th>Sıra</th>
                            <th>Durum</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {homes.map((home, index) => {
                            const trLang = home.homeTranslations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={home.id}>
                                    <td>{index + 1}</td>
                                    <td>{trLang?.title}</td>
                                    <td>{trLang?.url}</td>
                                    <td>{home.order}</td>
                                    <td>{home.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/homes/${home.id}/edit`}>
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
