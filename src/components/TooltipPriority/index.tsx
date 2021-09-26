import { ReactElement } from "react";

import "./style.scss";

import { Priority } from "scripts/classes/TodoItem";

interface Props {
	priority: Priority;
	isSelected: boolean;
	handleClick: (priority: Priority) => void;
}

const TooltipPriority = ({ priority, isSelected, handleClick }: Props): ReactElement => {
	const classList = [
		"tooltip-priority",
		`tooltip-priority--${priority}`,
		`tooltip-priority--${isSelected ? "selected" : "not-selected"}`,
	].join(" ");

	return <i className={classList} title={`${priority} priority`} onClick={() => handleClick(priority)} />;
};

export default TooltipPriority;
