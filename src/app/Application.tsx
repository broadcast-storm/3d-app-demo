import '@/shared/styles/base.css';

import { HashRouter, Router } from '@solidjs/router';
import { ErrorBoundary, Match, Switch } from 'solid-js';

import { ENV_CONFIG, isHashRouter } from '@/shared/config/environment';
import { PageLayout } from '@/shared/ui/page-layout';

import { Routes } from './Router';

export function Application() {
    return (
        <ErrorBoundary fallback={<div>Something went terribly wrong</div>}>
            <Switch fallback={<div>Not Found</div>}>
                <Match when={isHashRouter}>
                    <HashRouter root={PageLayout}>{Routes}</HashRouter>
                </Match>
                <Match when={!isHashRouter}>
                    <Router base={ENV_CONFIG.BASE_URL} root={PageLayout}>
                        {Routes}
                    </Router>
                </Match>
            </Switch>
        </ErrorBoundary>
    );
}
