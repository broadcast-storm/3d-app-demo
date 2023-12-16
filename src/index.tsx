import 'solid-devtools';

import { render } from 'solid-js/web';

import Application from '@/app';

const root = document.getElementById('root');

render(() => <Application />, root!);
