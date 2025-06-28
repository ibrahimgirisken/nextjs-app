import React from 'react';
type Routes = {
  admin: Record<string, string>;
  ux: Record<string, string>;
};

export function resolveRouteKey({
  routes,
  section,
  fullPath,
}: {
  routes: Routes;
  section: 'admin' | 'ux';
  fullPath: string;
}): string | null {
  const sectionRoutes = routes[section];
  for (const key in sectionRoutes) {
    if (sectionRoutes[key] === fullPath) {
      return key;
    }
  }
  return null;
}
