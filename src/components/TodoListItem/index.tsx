import { ReactElement } from "react";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import TodoItem from "scripts/classes/TodoItem";
import { formatDate } from "scripts/utils";

import "./style.scss";

interface Props {
	todo: TodoItem;
	status: "Todo" | "Doing" | "Done";
	draggableProps: {
		provided: DraggableProvided;
		snapshot: DraggableStateSnapshot;
	};
}

const TodoListItem = ({ todo, status, draggableProps: { provided, snapshot } }: Props): ReactElement => {
	const classList = [
		"todo-list-item",
		`todo-list-item--type-${status.toLowerCase()}`,
		`todo-list-item--priority-${todo.priority}`,
	].join(" ");

	return (
		<div
			className={classList}
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			style={{ ...provided.draggableProps.style }}
			// onClick={() => removeTodo(item.id)}
		>
			<div className="todo-list-item__row">
				<div className="todo-list-item__group">
					<i className="todo-list-item__checkbox">
						<i className="todo-list-item__icon-check" />
					</i>
					<span className="todo-list-item__title">{todo.title}</span>
				</div>
				<i className="todo-list-item__icon-tune" />
			</div>
			{todo.dueDate && (
				<div className="todo-list-item__row">
					<p className="todo-list-item__due-date">{formatDate(todo.dueDate)}</p>
				</div>
			)}
		</div>
	);
};

export default TodoListItem;
