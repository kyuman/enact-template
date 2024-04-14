import { useState, useEffect, useCallback } from 'react';
import { Header, Panel } from '@enact/sandstone/Panels';
import ProgressBar, {ProgressBarTooltip} from '@enact/sandstone/ProgressBar';
import Button from '@enact/sandstone/Button';
import Popup from '@enact/sandstone/Popup';
import { connectionmanager } from '../libs/services';

// 네트워크 상태를 얻어오고 에러 상태인 경우 경고 팝업을 띄우는 코드를 작성해보세요.
// 프로그레스바를 통하여 네트워크 연결된 경우 바가 100%를 표기하고 연결되어 있지 않은 경우 0%를 표기해주세요
// mock 데이터를 생성하여 pc에서도 동작 할 수 있도록 합니다.

// API : https://webostv.developer.lge.com/develop/references/connection-manager
// https://github.com/enactjs/sandstone/blob/master/samples/sampler/stories/default/ProgressBar.js

const MainPanel = (props) => {
	const [networkStatus, setNetworkStatus] = useState('Checking network status...');
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = useCallback(() => {
		setShowPopup(prev => !prev);
	}, []);;

	const fetchNetworkStatus = useCallback(async () => {
		setNetworkStatus('Checking network status...');
		try {
			const res = await connectionmanager({
				method: 'getStatus',
				parameters: { "subscribe": false },
			});
			if (res.returnValue && res.isInternetConnectionAvailable) {
				setNetworkStatus('Internet is available');
			} else {
				setNetworkStatus('No Internet connection');
				togglePopup();
			}
		} catch (error) {
			setNetworkStatus('Failed to check network status');
			togglePopup();
		}
	}, [togglePopup]);

	useEffect(() => {
		fetchNetworkStatus();
	}, [fetchNetworkStatus]);

	return (
		<Panel {...props}>
			<Header>
				<title>Network Test</title>
			</Header>
			<Button onClick={fetchNetworkStatus}>Check Network Status</Button>
			<ProgressBar progress={networkStatus === 'Internet is available' ? 1 : 0}>
				<ProgressBarTooltip position="below center" />
			</ProgressBar>
			<Popup open={showPopup} onClose={togglePopup}>
				<p>{networkStatus}</p>
				<Button onClick={togglePopup}>Close</Button>
			</Popup>
		</Panel >
	);
}

export default MainPanel;
