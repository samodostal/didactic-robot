import { ReactElement, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./style.scss";

import { Guid, Priority } from "scripts/classes/TodoItem";
import TooltipPriority from "components/TooltipPriority";

interface Props {
	todoId: Guid;
}

interface InternalData {
	priority: Priority;
	dueDate: Date;
}

const TooltipContent = ({ todoId }: Props): ReactElement => {
	const [internalData, setInternalData] = useState<InternalData>({
		priority: "No",
		dueDate: new Date(),
	});

	const handleTooltipPriorityClick = (newPriority: Priority): void => {
		setInternalData({
			...internalData,
			priority: newPriority,
		});
	};

	const handleCalendarClick = (newDate: Date): void => {
		setInternalData({
			...internalData,
			dueDate: newDate,
		});
	};

	return (
		<div className="tooltip-content">
			<h3 className="tooltip-content__header">Priority</h3>
			<section className="tooltip-content__group">
				<TooltipPriority
					priority="No"
					isSelected={internalData.priority === "No"}
					handleClick={handleTooltipPriorityClick}
				/>
				<TooltipPriority
					priority="Low"
					isSelected={internalData.priority === "Low"}
					handleClick={handleTooltipPriorityClick}
				/>
				<TooltipPriority
					priority="Medium"
					isSelected={internalData.priority === "Medium"}
					handleClick={handleTooltipPriorityClick}
				/>
				<TooltipPriority
					priority="High"
					isSelected={internalData.priority === "High"}
					handleClick={handleTooltipPriorityClick}
				/>
			</section>
			<h3 className="tooltip-content__header">Calendar</h3>
			<section>
				<Calendar value={internalData.dueDate} onChange={handleCalendarClick} />
			</section>
		</div>
	);
};

export default TooltipContent;
