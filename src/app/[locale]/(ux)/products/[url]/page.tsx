'use client';
import { getProductByUrlAndLang } from '@/features/product/api/productService';
import { Product } from '@/features/product/types/product';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useLocale } from 'use-intl/react';

export default function productDetail({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const locale = useLocale();
    const [product, setProduct] = React.useState<Product>();
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        getProductByUrlAndLang(slug as string, locale as string)
            .then(setProduct)
            .finally(() => setLoading(false));
    }, [slug, locale]);
    console.log(slug);
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
