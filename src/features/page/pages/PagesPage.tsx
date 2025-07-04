'use client';

import { Row, Col, Card } from 'react-bootstrap';
import { getUseTranslationsSafe } from '@/i18n/getUseTranslationsSafe';
import { usePageByLang } from '../hooks/usePages';
import { Page } from '../types/page';

export default function UXPage({ locale }: { locale: string }) {
    const { data: products, isLoading, error } = usePageByLang(locale);
    const t = getUseTranslationsSafe();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">{t('other.productTitle')}</h1>
            <Row xs={1} md={3} className="g-4">
                {products?.map((page: Page) => {
                    const translation = page.pageTranslations.find((t) =>
                        t.langCode.startsWith(locale)
                    );
                    if (!translation) return null;

                    return (
                        <Col key={page.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{translation.title}</Card.Title>
                                    <Card.Title>{translation.url}</Card.Title>
                                    <Card.Text>{translation.brief}</Card.Text>
                                    <a
                                        className="btn btn-primary"
                                        href={`/${t('route.products')}/${translation.url}`}
                                    >
                                        {t('other.details')}
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}