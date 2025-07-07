'use client';
import { moduleService } from '@/features/module/api/moduleService';
import { Module } from '@/features/module/types/module'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Spinner, Table } from 'react-bootstrap';

export default function ModuleList() {
    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        moduleService.getAll()
            .then(setModules)
            .finally(() => setLoading(false));
    });

    if (loading) {
        return <Spinner animation='border' />
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Modül Listesi</h2>
                <Link href="/admin/modules/new">
                    <Button variant="primary">Yeni Modül Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ad (TR)</th>
                            <th>Modül Tipi</th>
                            <th>Sıra</th>
                            <th>Durum</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modules.map((module, index) => {
                            const trLang = module.moduleTranslations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={module.id}>
                                    <td>{index + 1}</td>
                                    <td>{trLang?.name}</td>
                                    <td>{module.contentType}</td>
                                    <td>{module.order}</td>
                                    <td>{module.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/modules/${module.id}/edit`}>
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
        </>
    )
}
