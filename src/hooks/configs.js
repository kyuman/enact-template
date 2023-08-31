// This is subscribe APIs.
import {useEffect, useRef, useState} from 'react';

import debugLog from '../libs/log';
import {getVolume} from '../libs/services';

export const useConfigs = () => {
	const ref = useRef(null);
	const [value, setValue] = useState({returnValue: false});

	useEffect(() => {
		if (!ref.current) {
			debugLog('GET_VOLUME[R]', {});
			ref.current = getVolume({
				parameters: {
					subscribe: true,
				},
				onSuccess: res => {
					debugLog('GET_VOLUME[S]', res);
					setValue(res);
				},
				onFailure: err => {
					debugLog('GET_VOLUME[F]', err);
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
