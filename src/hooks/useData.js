// This is subscribe APIs.
import {useEffect, useRef, useState} from 'react';

import debugLog from '../libs/log';
import {getProcStat, getUnitList} from '../libs/services';

export const useProcStat = () => {
	const ref = useRef(null);
	const [value, setValue] = useState({returnValue: false});

	useEffect(() => {
		if (!ref.current) {
			debugLog('GET_PROC_STAT[R]', {});
			ref.current = getProcStat({
				parameters: {
					subscribe: true
				},
				onSuccess: res => {
					debugLog('GET_PROC_STAT[S]', res);
					setValue(res);
				},
				onFailure: err => {
					debugLog('GET_PROC_STAT[F]', err);
				}
			});
		}

		return () => {
			if (ref.current) {
				ref.current.cancel();
				ref.current = null;
			}
		};
	}, []);

	return value;
};



export const useUnitList = () => {
	const ref = useRef(null);
	const [value, setValue] = useState({returnValue: false});

	useEffect(() => {
		if (!ref.current) {
			debugLog('GET_UNIT_LIST[R]', {});
			ref.current = getUnitList({
				parameters: {
					subscribe: true
				},
				onSuccess: res => {
					debugLog('GET_UNIT_LIST[S]', res);
					setValue(res);
				},
				onFailure: err => {
					debugLog('GET_UNIT_LIST[F]', err);
				}
			});
		}

		return () => {
			if (ref.current) {
				ref.current.cancel();
				ref.current = null;
			}
		};
	}, []);

	return value;
};