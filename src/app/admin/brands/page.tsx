'use client'
import { getBrands } from '@/features/brand/api/brandService';
import { Brand } from '@/features/brand/types/brand';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Spinner, Table } from 'react-bootstrap';

export default function BrandList() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBrands()
            .then(setBrands)
            .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return <Spinner animation="border" />
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Marka Listesi</h2>
                <Link href="/admin/brands/new">
                    <Button variant="primary">Yeni Marka Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Kodu</th>
                            <th>Ad (TR)</th>
                            <th>Sıra</th>
                            <th>Durum</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map((brand, index) => {
                            return (
                                <tr key={brand.id}>
                                    <td>{index + 1}</td>
                                    <td>{brand.code}</td>
                                    <td>{brand.name}</td>
                                    <td>{brand.order}</td>
                                    <td>{brand.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/brands/${brand.id}/edit`}>
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
