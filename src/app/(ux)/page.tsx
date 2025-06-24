import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations({ locale });

  const productsPath = `/${locale}/${t('routes.products')}`;
  const categoriesPath = `/${locale}/${t('routes.categories')}`;

  return (
    <>
      <a href={productsPath}>{t("menu.products")}</a>
      <span> | </span>
      <a href={categoriesPath}>{t("menu.categories")}</a>
    </>
  );
}
