'use client';
import { getProductById } from '@/features/product/api/productService';
import { Product } from '@/features/product/types/product';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

export default function productDetail() {
    const { url } = useParams();
    const [product, setProduct] = React.useState<Product>();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        getProductById(url as string)
            .then(setProduct)
            .finally(() => setLoading(false));
    });
    return (
        <>
            <h1>{product?.code}</h1>
        </>
    )
}
