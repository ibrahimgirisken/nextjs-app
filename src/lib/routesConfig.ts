import HomePage from '@/app/(ux)/page';
import ProductsPage from '@/app/(ux)/products/page';
import ProductDetailPage from '@/app/(ux)/products/[url]/page';
import CategoriesPage from '@/app/(ux)/categories/page';
import CategoriesDetailPage from '@/app/(ux)/categories/[url]/page';

import AdminDashboardPage from '@/app/admin/dashboard/page';
import AdminProductsPage from '@/app/admin/products/page';
import AdminCategoriesPage from '@/app/admin/categories/page';
import { RouteEntry } from '@/features/route/type/routeEntry';

export const routesConfig: Record<string, RouteEntry> = {
  home: {
    path: '',
    component: HomePage,
    layout: 'ux',
    hasSlug: false,
    i18nKey: 'routes.home',
  },
  products: {
    path: 'products',
    component: ProductsPage,
    layout: 'ux',
    hasSlug: false,
    i18nKey: 'routes.products',
  },
  productDetail: {
    path: 'products/[slug]',
    component: ProductDetailPage,
    layout: 'ux',
    hasSlug: true,
  },
  categories: {
    path: 'categories',
    component: CategoriesPage,
    layout: 'ux',
    hasSlug: false,
    i18nKey: 'routes.categories',
  },
  categoryDetail: {
    path: 'categories/[slug]',
    component: CategoriesDetailPage,
    layout: 'ux',
    hasSlug: true,
  },
};

