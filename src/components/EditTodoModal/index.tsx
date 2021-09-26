import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";

import { selectTodoCategories } from "store";
import TooltipContent from "components/TooltipContent";

const GlobalTooltip = (): ReactElement => {
	const todoCategories = useSelector(selectTodoCategories);

	useEffect(() => {
		ReactTooltip.rebuild(); //Rebuild event listeners
	}, [todoCategories]);

	return (
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
	);
};

export default GlobalTooltip;
