import UXLayout from '@/app/(ux)/layout';
import AdminLayout from '@/app/admin/layout';
import { resolveRoute } from '@/lib/resolveRoute';

export default async function Page({ params }: { params: Promise<{ locale: string; segments?: string[] }> }) {
    const resolvedParams = await params;

    const { component: Component, layout, componentParams } = await resolveRoute(resolvedParams);

    const Layout = layout === 'admin' ? AdminLayout : UXLayout;

    return (
        <Layout>
            <Component params={componentParams} />
        </Layout>
    );
}
