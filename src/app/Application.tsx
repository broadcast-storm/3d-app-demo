import '@/shared/styles/base.css';

import { Router } from '@solidjs/router';

import { PageLayout } from '@/shared/ui/page-layout';

import { Routes } from './Router';

const BASE_URL = '/3d-app-demo';

export function Application() {
    return (
        <Router base={BASE_URL} root={PageLayout}>
            {Routes}
        </Router>
    );
}
