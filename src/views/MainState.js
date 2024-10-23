// This is bundle of states of Main.js

import {useCallback, useState} from 'react';
import {sam} from '../libs/services';
import debugLog from '../libs/log';

// example:
//  luna://com.webos.applicationManager/launch '{"id":"com.webos.app.self-diagnosis"}'

export const usePopup = () => {
	const [isPopupOpen, openPopup] = useState(false);

	const handleLaunchApp = useCallback(async () => {
		const result = await sam({
			method: 'launch',
			parameters: {id: 'com.webos.app.self-diagnosis'}
		});
		debugLog('SAM', result);
		openPopup(false);
	}, []);

	const handlePopupOpen = useCallback(() => {
		openPopup(true);
	}, []);

	const handlePopupClose = useCallback(() => {
		openPopup(false);
	}, []);

	return {isPopupOpen, handlePopupOpen, handlePopupClose, handleLaunchApp};
};
