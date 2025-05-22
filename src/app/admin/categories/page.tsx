'use client'
import { getCategories } from '@/features/category/api/categoryService'
import { Category } from '@/features/category/types/category'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Spinner, Table } from 'react-bootstrap'

export default function CategoryList() {

    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategories()
            .then(setCategories)
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation="border" />
    }


    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Kategori Listesi</h2>
                <Link href="/admin/categories/new">
                    <Button variant="primary">Yeni Kategori Ekle</Button>
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
                        {categories.map((category, index) => {
                            const trLang = category.categoryTranslations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={category.id}>
                                    <td>{index + 1}</td>
                                    <td>{trLang?.name}</td>
                                    <td>{category.parentId}</td>
                                    <td>{category.order}</td>
                                    <td>{category.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/categories/${category.id}/edit`}>
                                            <Button variant="warning" size="sm" className="me-2">
                                                Düzenle
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody >
                </Table >
            </div >
        </>
    )
}
