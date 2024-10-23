import LS2Request from '@enact/webos/LS2Request';

import {isDevServe} from './utils';

const send = (Req, service, callInfo) => {
	if (callInfo.parameters?.subscribe) {
		return new Req().send({
			service,
			method: callInfo?.method,
			parameters: callInfo?.parameters,
			onSuccess: callInfo?.onSuccess,
			onFailure: callInfo?.onFailure
		});
	}

	return new Promise((onSuccess, onFailure) =>
		new Req().send({
			service,
			method: callInfo?.method,
			parameters: callInfo?.parameters,
			onSuccess,
			onFailure
		})
	);
};

const request = service => callInfo => {
	/* istanbul ignore if */
	if (isDevServe()) {
		// eslint-disable-next-line
		const req = require('../../__mocks__/@enact/webos/LS2Request');
		return send(req.default, service, callInfo);
	}

	return send(LS2Request, service, callInfo);
};

export default request;
