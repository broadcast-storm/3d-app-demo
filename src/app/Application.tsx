import '@/shared/styles/base.css';

import { HashRouter, Router } from '@solidjs/router';
import { ErrorBoundary } from 'solid-js';

import { ENV_CONFIG, isHashRouter } from '@/shared/config/environment';
import { PageLayout } from '@/shared/ui/page-layout';

import { Routes } from './Router';

export function Application() {
    const CurrentRouter = isHashRouter ? HashRouter : Router;
    return (
        <ErrorBoundary fallback={<div>Something went terribly wrong</div>}>
            <CurrentRouter
                preload
                root={PageLayout}
                base={!isHashRouter ? ENV_CONFIG.BASE_URL : undefined}>
                {Routes}
            </CurrentRouter>
        </ErrorBoundary>
    );
}
