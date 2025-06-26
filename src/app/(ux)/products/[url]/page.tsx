'use client';
import { getProductByUrlAndLang } from '@/features/product/api/productService';
import { Product } from '@/features/product/types/product';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

export default function productDetail({ params }: { params: { locale: string, slug: string } }) {
    const { locale, slug } = params;
    const [product, setProduct] = React.useState<Product>();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        getProductByUrlAndLang(slug as string, locale as string)
            .then(setProduct)
            .finally(() => setLoading(false));
    }, [])
    return (
        <>
            <h1>{product?.code}</h1>
            <Container>
                {product ? product.productTranslations.map((translation) => (
                    <div key={translation.langCode}>
                        <h2>{translation.brief}</h2>
                        <p>{translation.brief}</p>
                        <p>{translation.content}</p>
                    </div>
                )) : null}
            </Container>
        </>
    )
}
