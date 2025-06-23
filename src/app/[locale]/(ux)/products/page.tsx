'use client';
import { useProducts } from '@/features/product/hooks/useProducts'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Product } from '@/features/product/types/product';

const currentLang: 'tr' | 'en' | 'de' = 'tr';

function UXProductsPage() {
    const { data: products, isLoading, error } = useProducts();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">Ürünler</h1>
            <Row xs={1} md={3} className="g-4">
                {products?.map((product: Product) => {
                    const translation = product.productTranslations.find(
                        (t) => t.langCode === currentLang
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
                                    <a className='btn btn-primary' href={`products/${translation.url}`}>Detay</a>
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
