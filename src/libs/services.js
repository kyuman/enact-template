import request from '../libs/request';

export const mem = callInfo => request('luna://com.webos.memorymanager')(callInfo);

export const sam = callInfo =>
	request('luna://com.webos.applicationManager')(callInfo);
