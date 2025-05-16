import {Panels} from '@enact/sandstone/Panels';
import Main from '../views/Main';
import DetailPanel from '../views/DetailPanel';
import SettingPanel from '../views/SettingPanel';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
const App = props => {
	// 패널 데이터 정의
	const panels = [
		{
			name: 'main',
			data: {}
		},
		{
			name: 'detail',
			data: {
				index: 1
			}
		},
		{
			name: 'setting',
			data: {
				index: 2
			}
		}
	];

	// 패널 매핑 함수
	const panelMapper = panel => {
		switch (panel.name) {
			case 'main':
				return <Main />;
			case 'detail':
				return <DetailPanel data={panel.data} />;
			case 'setting':
				return <SettingPanel data={panel.data} />;
			default:
				return null;
		}
	};

	return (
		<Panels {...props} index={panels.length - 1}>
			{panels.map(panelMapper)}
		</Panels>
	);
};

export default ThemeDecorator(App);
