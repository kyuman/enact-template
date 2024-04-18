import {useState} from 'react';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';
import Main from '../views/Main';
import {useBackHandler, useCloseHandler, useDocumentEvent} from './AppState';
import {isDevServe} from '../libs/utils';
import DetailPanel from '../views/DetailPanel';
import SettingPanel from '../views/SettingPanel';

/* istanbul ignore next*/
if (isDevServe()) {
	window.webOSSystem = {
		highContrast: 'off',
		close: () => {},
		platformBack: () => {},
		PmLogString: () => {},
		screenOrientation: 'landscape',
		setWindowOrientation: () => {}
	};
}

const App = props => {
	const [index, setIndex] = useState(0);
	const [skinVariants, setSkinVariants] = useState({highContrast: false});
	const handleBack = useBackHandler(setIndex);
	const handleClose = useCloseHandler();
	useDocumentEvent(setSkinVariants);
	return (
		<Panels
			{...props}
			index={index}
			skinVariants={skinVariants}
			onBack={handleBack}
			onClose={handleClose}
		>
			<Main onGoToDetail={() => setIndex(1)} />
			<DetailPanel />
			<SettingPanel />
		</Panels>
	);
};

export default ThemeDecorator(App);
