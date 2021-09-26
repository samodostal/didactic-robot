import { ReactElement } from "react";
import ReactTooltip from "react-tooltip";
import "./styles/global.scss";

import MainScreen from "containers/MainScreen";
import TooltipContent from "components/TooltipContent";

const App = (): ReactElement => {
	return (
		<>
			<MainScreen />
			<ReactTooltip
				place="bottom"
				effect="solid"
				event="click"
				globalEventOff="click"
				clickable={true}
				backgroundColor="white"
				border={true}
				borderColor="#eaeaea"
				getContent={(props) => <TooltipContent todoId={props} />}
			/>
		</>
	);
};

export default App;
