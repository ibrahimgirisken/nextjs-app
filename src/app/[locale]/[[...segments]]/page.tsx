import { getTranslations } from 'next-intl/server';
import ProductList from '../(ux)/products/page';
import CategoryList from '../(ux)/categories/page';

export default async function Page({ params }: { params: { locale: string; segments?: string[] } }) {
    const t = await getTranslations({ locale: params.locale });
    const [segment] = params.segments ?? [];

    switch (segment) {
        case t('routes.products'):
            return <ProductList />;
        case t('routes.categories'):
            return <CategoryList />;
        default:
            return <div>{t('notFound')}</div>; // 404 veya yönlendirme
    }
}
