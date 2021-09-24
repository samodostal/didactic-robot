import { ReactElement } from "react";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import TodoItem from "scripts/classes/TodoItem";

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
			<div className="todo-list-item__group">
				<i className="todo-list-item__checkbox">
					<i className="todo-list-item__icon-check" />
				</i>
				{todo.title}
			</div>
			<i className="todo-list-item__icon-tune" />
		</div>
	);
};

export default TodoListItem;
