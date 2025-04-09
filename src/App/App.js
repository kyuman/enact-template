import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';
import MainPanel from '../views/MainPanel';


const App = (props) => {
	return (<div {...props}>
		<Panels>
			<MainPanel />
		</Panels>
	</div>)
}

export default ThemeDecorator(App);
