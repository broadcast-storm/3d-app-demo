import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

import { ROUTES } from '@/shared/config/routes';

type TRoutes = RouteDefinition<ValueOf<typeof ROUTES>>[];

export const Routes: TRoutes = [
    {
        path: ROUTES.SETTINGS,
        component: lazy(() => import('../pages/settings')),
    },
    {
        path: ROUTES.ABOUT,
        component: lazy(() => import('../pages/about')),
    },
    {
        path: ROUTES.MAIN,
        component: lazy(() => import('../pages/main')),
    },
    {
        path: ROUTES.NOT_FOUND,
        component: lazy(() => import('../pages/not-found')),
    },
];
