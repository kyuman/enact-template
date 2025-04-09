import LS2Request from '@enact/webos/LS2Request';

const memService = {
	getProcStat: (onSuccess, onFailure) => {
		new LS2Request().send({
			service: 'luna://com.webos.memorymanager',
			method: 'getProcStat',
			parameters: {
				subscribe: true
			},
			onSuccess,
			onFailure
		});
	},
	getUnitList: (onSuccess, onFailure) => {
		new LS2Request().send({
			service: 'luna://com.webos.memorymanager',
			method: 'getUnitList',
			parameters: {
				subscribe: true
			},
			onSuccess,
			onFailure
		});
	}
};

export default memService;
