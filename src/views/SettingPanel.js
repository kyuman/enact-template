/* eslint-disable enact/prop-types */
import {Header, Panel} from '@enact/sandstone/Panels';
import Item from '@enact/sandstone/Item';
import {PanelContext} from './Context';
import {useCallback, useContext} from 'react';

const SettingPanel = props => {
	const {data, ...rest} = props;
	const index = data?.index ?? 0;
	const {setPanelData} = useContext(PanelContext);
	const handleClick = useCallback(() => {
		setPanelData(prev => [...prev, {name: 'detail', data: {index: index + 1}}]);
	}, [index, setPanelData]);
	return (
		<Panel {...rest}>
			<Header title={`Setting ${index}`} />
			<Item onClick={handleClick}>SettingPanel {index}</Item>
		</Panel>
	);
};

export default SettingPanel;
