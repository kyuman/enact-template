import {createRoot} from 'react-dom/client';

import App from './App/App';

let appElement = <App highContrast />;

const root = document.getElementById('root');
createRoot(root).render(appElement);
appElement = null;

export default appElement;
