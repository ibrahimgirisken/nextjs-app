'use client';

import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Page } from '../types/page';
import { pageService } from '../api/pageService';

export default function ProductDetailPage({ slug, locale }: { slug: string; locale: string }) {

    const [page, setPage] = useState<Page | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug || !locale) return;

        pageService.getByUrlAndLang(slug, locale)
            .then(setPage)
            .catch((err) => {
                console.error('Ürün getirilemedi:', err);
                setPage(null);
            })
            .finally(() => setLoading(false));
    }, [slug, locale]);


    if (loading) return <div>Yükleniyor...</div>;
    if (!page) return <div>Ürün bulunamadı.</div>;

    const translation = page.pageTranslations.find(t => t.langCode.startsWith(locale));

    return (
        <Container>
            <h1>{page.id}</h1>
            {translation && (
                <>
                    <h2>{translation.title}</h2>
                    <p>{translation.brief}</p>
                    <div dangerouslySetInnerHTML={{ __html: translation.content }} />
                </>
            )}
        </Container>
    );
}
