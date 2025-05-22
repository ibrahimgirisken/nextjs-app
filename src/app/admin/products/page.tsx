'use client'

import { getProducts } from "@/features/product/api/productService"
import { Product } from "@/features/product/types/product"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Spinner, Table } from "react-bootstrap"

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <Spinner animation="border" />
    }
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Ürün Listesi</h2>
                <Link href="/admin/products/new">
                    <Button variant="primary">Yeni Ürün Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Kod</th>
                            <th>Ad (TR)</th>
                            <th>Kategori</th>
                            <th>Durum</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            const trLang = product.productTranslations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product.code}</td>
                                    <td>{trLang?.name}</td>
                                    <td>{product.categoryId}</td>
                                    <td>{product.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/products/${product.id}/edit`}>
                                            <Button variant="warning" size="sm" className="me-2">
                                                Düzenle
                                            </Button>
                                        </Link>
                                        {/* İsteğe bağlı: silme butonu */}
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
