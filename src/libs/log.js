import {info} from '@enact/webos/pmloglib';

import {isBrowser, isTVBrowser} from './utils';

const debugLog = (msgId, values) => {
	if (!isBrowser()) return;

	const id = `Enact_${msgId}`;

	if (isTVBrowser()) {
		info(id, values, '');
	}

	if (['development', 'test'].includes(process.env.NODE_ENV)) {
		// eslint-disable-next-line no-console
		console.log(id, values);
	}
};

export default debugLog;
