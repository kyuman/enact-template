import {render} from 'react-dom';

import App from './App/App';
import {isBrowser} from './libs/utils';

let appElement = <App highContrast />;

if (isBrowser()) {
	render(appElement, document.getElementById('root'));
}

export default appElement;
