'use client';
import { getProductByUrlAndLang } from '@/features/product/api/productService';
import { Product } from '@/features/product/types/product';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

export default function productDetail({ params }: { params: { locale: string, slug: string } }) {
    const { locale, slug } = params;
    const [product, setProduct] = React.useState<Product>();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        getProductByUrlAndLang(slug as string, locale as string)
            .then(setProduct)
            .finally(() => setLoading(false));
    });
    return (
        <>
            <h1>{product?.code}</h1>
        </>
    )
}
