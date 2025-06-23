import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const productsPath = `/${locale}/${t('routes.products')}`;
  const categoriesPath = `/${locale}/${t('routes.categories')}`;
  return (
    <>
      <a href={productsPath}>{t("Menu.products")}</a>
      <span> | </span>
      <a href={categoriesPath}>{t("Menu.categories")}</a>
    </>
  );
}