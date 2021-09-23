import { ReactElement } from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import { selectTodos } from "store";
import { Guid } from "scripts/classes/TodoItem";

interface Props {
	removeTodo: (removeId: Guid) => void;
}

const TodosScreen = ({ removeTodo }: Props): ReactElement => {
	const todos = useSelector(selectTodos);

	return (
		<div className="todos-screen">
			{todos.length === 0 && <div className="todos-screen__placeholder">No tasks left...</div>}
			{todos.map((todo) => (
				<div key={todo.id} className="todos-screen__todo-item">
					<span className="todos-screen__todo-title">{todo.title}</span>
					<span className="todos-screen__todo-remove" onClick={() => removeTodo(todo.id)}>
						&times;
					</span>
				</div>
			))}
		</div>
	);
};

export default TodosScreen;
