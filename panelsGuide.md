# Enact Panels 가이드

## 개요
Enact의 Panels 컴포넌트는 여러 화면을 관리하고 전환하는데 사용되는 UI 컴포넌트입니다.


## 기본 구조

```jsx
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

```

## 주요 특징

### 1. 패널 데이터 구조
- 각 패널은 `name`과 `data` 속성을 가진 객체로 정의됩니다.
- `name`: 패널을 식별하는 고유한 이름
- `data`: 해당 패널에 전달할 데이터 객체

### 2. 패널 매핑
- `panelMapper` 함수를 통해 각 패널 데이터를 실제 컴포넌트로 변환합니다.
- `switch` 문을 사용하여 패널 이름에 따라 적절한 컴포넌트를 반환합니다.
- `panels` 의 index prop을 통해 현재 보여줄 패널을 결정합니다.
- `panels` 의 onBack prop을 통해 Back 버튼의 이벤트를 핸들링 합니다.

## 실제 사용 예제

### 기본 패널 정보 관리를 위한 Context 선언
```jsx
export const PanelContext = createContext();

export const Provider = props => {
	const [panelData, setPanelData] = useState([
		{name: 'main', data: {}}
	]);
	return (
		<PanelContext.Provider
			value={{
				panelData,
				setPanelData
			}}
		>
			{props.children}
		</PanelContext.Provider>
	);
};

```
### Context data 사용
```jsx

const App = props => {
	const handleBack = useBackHandler();
	const {panelData} = useContext(PanelContext);
	return (
		<Panels
			{...props}
			index={panelData.length - 1}
			onBack={handleBack}
		>
			{panelData.map(panelMapper)}
		</Panels>
	);
};
```


### 패널 전환 정보 전달
```jsx
const SettingPanel = props => {
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
```

## 결론
Panels 컴포넌트는 동적인 UI 흐름을 관리하는데 매우 유용하니 참고 바랍니다.