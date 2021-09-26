import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./style.scss";

import { getTodoFromCategories } from "scripts/utils";
import { Guid, Priority } from "scripts/classes/TodoItem";
import TooltipPriority from "components/TooltipPriority";
import { selectTodoCategories, TodosState, updateTodoItem } from "store";

interface Props {
	todoId: Guid | "New Todo";
}

export interface InternalData {
	priority: Priority;
	dueDate: Date | null;
}

const defaultInternalData: InternalData = {
	priority: "No",
	dueDate: null,
};

const TooltipContent = ({ todoId }: Props): ReactElement => {
	const todoCategories = useSelector(selectTodoCategories);
	const [internalData, setInternalData] = useState<InternalData>(defaultInternalData);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log("here again");
		updateTodoItemByInternalData();
	}, [internalData]);

	useEffect(() => {
		const foundTodo = getTodoFromCategories(todoCategories, todoId);
		if (foundTodo) {
			setInternalData({
				priority: foundTodo.priority,
				dueDate: foundTodo.dueDate,
			});
		}
	}, [todoId]);

	const updateTodoItemByInternalData = (): void => {
		if (todoId === "New Todo") {
			//
		} else {
			dispatch(updateTodoItem({ todoId, internalData }));
		}
	};

	const handleTooltipPriorityClick = (newPriority: Priority): void => {
		setInternalData({
			...internalData,
			priority: newPriority,
		});
	};

	const handleCalendarClick = (newDate: Date): void => {
		const dueDate = JSON.stringify(newDate) !== JSON.stringify(internalData.dueDate) ? newDate : null;
		setInternalData({
			...internalData,
			dueDate,
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
