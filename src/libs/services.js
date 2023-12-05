import request from '../libs/request';

const mem = request('luna://com.webos.memorymanager');

export const getProcStat = params =>
	mem({method: 'getProcStat', ...params});

export const getUnitList = params =>
	mem({method: 'getUnitList', ...params});

const sam = request('luna://com.webos.applicationManager');
export const launch = parameters => sam({method: 'launch', parameters});
