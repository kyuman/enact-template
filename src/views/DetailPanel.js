/* eslint-disable enact/prop-types */
import {Header, Panel} from '@enact/sandstone/Panels';
import Item from '@enact/sandstone/Item';
import {PanelContext} from './Context';
import {useCallback, useContext} from 'react';

const DetailPanel = props => {
	const {data, ...rest} = props;
	const index = data?.index ?? 0;
	const {setPanelData} = useContext(PanelContext);
	const handleClick = useCallback(() => {
		setPanelData(prev => [...prev, {name: 'setting', data: {index: index + 1}}]);
	}, [index, setPanelData]);
	return (
		<Panel {...rest}>
			<Header title={`Detail ${index}`} />
			<Item onClick={handleClick}>Panel {index}</Item>
		</Panel>
	);
};

export default DetailPanel;
