import Alert from '@enact/sandstone/Alert';
import BodyText from '@enact/sandstone/BodyText';
import Button from '@enact/sandstone/Button';
import {Header, Panel} from '@enact/sandstone/Panels';
import {usePopup} from './MainState';

import css from './Main.module.less';
import $L from '@enact/i18n/$L';
import {useProcStat} from '../hooks/useData';

const Main = props => {
	const procStat = useProcStat();
	const {isPopupOpen, handlePopupOpen, handlePopupClose, handleLaunchApp} =
		usePopup();

	return (
		<Panel {...props}>
			<Header title={$L('Enact Template')} />
			<BodyText>{$L('This is a main page of sample application.')}</BodyText>
			<Button onClick={handlePopupOpen} size="small" className={css.buttonCell}>
				{$L('Open Alert')}
			</Button>
			<BodyText>{`procStat : ${JSON.stringify(procStat)}`}</BodyText>
			<Alert type="overlay" open={isPopupOpen} onClose={handlePopupClose}>
				<span>{$L('This is an alert message.')}</span>
				<buttons>
					<Button
						size="small"
						className={css.buttonCell}
						onClick={handleLaunchApp}
					>
						Launch
					</Button>
					<Button
						size="small"
						className={css.buttonCell}
						onClick={handlePopupClose}
					>
						{$L('Close')}
					</Button>
				</buttons>
			</Alert>
		</Panel>
	);
};

export default Main;
