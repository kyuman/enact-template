import ImageItem from '@enact/sandstone/ImageItem';
import Scroller from '@enact/sandstone/Scroller';
import Button from '@enact/sandstone/Button';
import Item from '@enact/sandstone/Item';
import Icon from '@enact/sandstone/Icon';
import TabLayout, {Tab} from '@enact/sandstone/TabLayout';
import {Header, Panel} from '@enact/sandstone/Panels';
import {scaleToRem} from '@enact/ui/resolution';
import {useCallback} from 'react';
import {svgGenerator} from '../libs/svg';

const tabsWithIcons = [
	{title: 'Home', icon: 'home'},
	{title: 'Button', icon: 'gear'},
	{title: 'Item', icon: 'trash'}
];

const Main = props => {
	const handleClick = useCallback(
		index => () => {
			console.log("index : ", index)
		},
		[]
	);

	const images = new Array(20).fill().map((_, i) => (
		<ImageItem
			inline
			key={`image${i}`}
			label="ImageItem label"
			src={svgGenerator(360, 240, 'd8d8d8', '6e6e6e', '360 X 240')}
			style={{
				width: scaleToRem(768),
				height: scaleToRem(588)
			}}
			onClick={handleClick(i)}
		>
			{`ImageItem ${i + 1}`}
		</ImageItem>
	));

	return (
		<Panel {...props}>
			<Header title="Sandstone TabLayout" subtitle="Basic TabLayout" />
			<TabLayout>
				<Tab title={tabsWithIcons[0].title} icon={tabsWithIcons[0].icon}>
					<Scroller>{images}</Scroller>
				</Tab>
				<Tab title={tabsWithIcons[1].title} icon={tabsWithIcons[1].icon}>
					<ButtonTab onGoToDetail={props?.onGoToDetail} />
				</Tab>
				<Tab title={tabsWithIcons[2].title} icon={tabsWithIcons[2].icon}>
					<Item slotBefore={<Icon>playcircle</Icon>}>Single Item</Item>
				</Tab>
			</TabLayout>
		</Panel>
	);
};

const ButtonTab = (props) => (
	<>
		<Button icon="demosync" onClick={props?.onGoToDetail}>
			Button 1
		</Button>
		<Button icon="demosync">Button 2</Button>
		<Button icon="demosync">Button 3</Button>
		<Button icon="demosync">Button 4</Button>
		<Button icon="demosync">Button 5</Button>
	</>
);

export default Main;
