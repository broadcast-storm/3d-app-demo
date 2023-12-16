import '@/shared/styles/base.css';

import { Router } from '@solidjs/router';

import { ENV_CONFIG } from '@/shared/config/environment';
import { PageLayout } from '@/shared/ui/page-layout';

import { Routes } from './Router';

export function Application() {
    return (
        <Router base={ENV_CONFIG.BASE_URL} root={PageLayout}>
            {Routes}
        </Router>
    );
}
