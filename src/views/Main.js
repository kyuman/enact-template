import VirtualList from '@enact/sandstone/VirtualList';
import Popup from '@enact/sandstone/Popup';
import Item from '@enact/sandstone/Item';
import {Header, Panel} from '@enact/sandstone/Panels';
import $L from '@enact/i18n/$L';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ListItem = ({onClick, index, ...rest}) => {
	const handleClickItem = useCallback(() => {
		onClick(index);
	}, [onClick, index]);

	return <Item {...rest} onClick={handleClickItem}>{`item ${index}`}</Item>;
}

const Main = props => {

	const [selectedItem, setSelectedItem] = useState(-1);
	const [open, setOpen] = useState(selectedItem > -1);

	useEffect(() => {
		if(selectedItem > -1) {
			setOpen(true);
		}
	}, [selectedItem]);

	const renderItem = useCallback(({...rest}) => {
		return <ListItem onClick={setSelectedItem} {...rest} />;
	},[])

	const handleClose = useCallback(() => {
		setOpen(false);
	},[])

	return (
		<Panel {...props}>
			<Header title={$L('Enact Template')} />
			<VirtualList
				key="native"
				dataSize={100}
				itemRenderer={renderItem}
				itemSize={52}
				spacing={50}
			/>
			<Popup open={open} onClose={handleClose}>
				<div>Hello Popup {selectedItem}</div>
			</Popup>
		</Panel>
	);
};

export default Main;
