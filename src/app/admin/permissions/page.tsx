'use client'
import { applicationService } from '@/features/auth/api/permissionsService';
import { ApplicationService } from '@/features/auth/types/ApplicationService';
import React, { useEffect, useState } from 'react'

export default function PermissionsPage() {
    const [permissions, setPermissions] = useState<ApplicationService[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        applicationService.getAllSingle()
            .then(setPermissions)
            .finally(() => setLoading(false))
    }, []);
    if (loading) return <p>Yükleniyor...</p>;
    return (
        <>
            <h2>Yetkiler</h2>
            {permissions.map((service) => (
                <div key={service.name}>
                    <h4>{service.name}</h4>
                    <ul>
                        {service.actions.map((action) => (
                            <li key={action.code}>
                                <strong>{action.httpType}</strong> - {action.definition} ({action.code})
                            </li>
                        ))}
                    </ul>
                </div>

            ))}
        </>
    )
}
