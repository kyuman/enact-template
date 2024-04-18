/* eslint-disable enact/prop-types */
import {Header, Panel} from '@enact/sandstone/Panels';
import Item from '@enact/sandstone/Item';
import {useCallback} from 'react';

const SettingPanel = props => {
	const {data, ...rest} = props;
	const index = data?.index ?? 0;
	const handleClick = useCallback(() => {}, []);
	return (
		<Panel {...rest}>
			<Header title={`Setting ${index}`} />
			<Item onClick={handleClick}>SettingPanel {index}</Item>
		</Panel>
	);
};

export default SettingPanel;
