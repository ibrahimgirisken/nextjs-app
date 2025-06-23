'use client';
import { useProducts } from '@/features/product/hooks/useProducts'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Product } from '@/features/product/types/product';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';


function UXProductsPage() {
    const { data: products, isLoading, error } = useProducts();
    const t = useTranslations('products');
    const locale = useLocale();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">{t('title')}</h1>
            <Row xs={1} md={3} className="g-4">
                {products?.map((product: Product) => {
                    const translation = product.productTranslations.find(
                        (t) => t.langCode === locale
                    );
                    if (!translation) return null;
                    return (
                        <Col key={product.id}>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{product.code}</Card.Title>
                                    <Card.Title>{translation.name}</Card.Title>
                                    <Card.Text>{translation.brief}</Card.Text>
                                    <a className='btn btn-primary' href={`products/${translation.url}`}>{t('details')}</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row >
        </>
    )
}

export default UXProductsPage;
