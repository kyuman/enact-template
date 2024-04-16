import {createRoot} from 'react-dom/client';

import App from './App/App';
import {isBrowser} from './libs/utils';
import {Provider} from './views/Context';

let appElement = (
	<Provider>
		<App highContrast />
	</Provider>
);

if (isBrowser()) {
	const root = document.getElementById('root');
	createRoot(root).render(appElement);
	appElement = null;
}

export default appElement;
