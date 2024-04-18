/* eslint-disable enact/prop-types */
import {Header, Panel} from '@enact/sandstone/Panels';
import Item from '@enact/sandstone/Item';
import {useCallback} from 'react';

const DetailPanel = props => {
	const {data, ...rest} = props;
	const index = data?.index ?? 0;
	const handleClick = useCallback(() => {}, []);
	return (
		<Panel {...rest}>
			<Header title={`Detail ${index}`} />
			<Item onClick={handleClick}>Panel {index}</Item>
		</Panel>
	);
};

export default DetailPanel;
