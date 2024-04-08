import request from '../libs/request';

export const mem = params => request('luna://com.webos.memorymanager')(params);

export const sam = params =>
	request('luna://com.webos.applicationManager')(params);
