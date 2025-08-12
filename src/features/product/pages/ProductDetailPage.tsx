'use client';

import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Product } from '@/features/product/types/product';
import { productService } from '../api/productService';

export default function ProductDetailPage({ slug, locale }: { slug: string; locale: string }) {

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug || !locale) return;
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") || "" : "";
    productService.getByUrlAndLang(slug, locale)
      .then(setProduct)
      .catch((err) => {
        console.error('Ürün getirilemedi:', err);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [slug, locale]);


  if (loading) return <div>Yükleniyor...</div>;
  if (!product) return <div>Ürün bulunamadı.</div>;

  const translation = product.productTranslations.find(t => t.langCode.startsWith(locale));

  return (
    <Container>
      <h1>{product.code}</h1>
      {translation && (
        <>
          <h2>{translation.name}</h2>
          <p>{translation.brief}</p>
          <div dangerouslySetInnerHTML={{ __html: translation.content }} />
        </>
      )}
    </Container>
  );
}
