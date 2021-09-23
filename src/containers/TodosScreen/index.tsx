import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodoItem, removeTodoItem, selectTodos } from "store";
import TodoItem from "scripts/classes/TodoItem";

const TodosScreen = (): ReactElement => {
	const todos = useSelector(selectTodos);
	const dispatch = useDispatch();

	const [newTodo, setNewTodo] = useState("");

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		dispatch(addTodoItem(new TodoItem(newTodo)));
		setNewTodo("");
	};

	const removeTodo = (removeId: string): void => {
		dispatch(removeTodoItem(removeId));
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: 500,
				margin: "0 auto",
				padding: 8,
			}}
		>
			<h2 style={{ textAlign: "center" }}>Todo</h2>
			<form onSubmit={onSubmit} style={{ display: "flex", marginBottom: 8 }}>
				<input
					type="text"
					name="newTodo"
					id="newTodo"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Fix the thing.."
					style={{
						display: "inline-flex",
						flex: 1,
						padding: 4,
						border: "1px solid #eaeaea",
						marginRight: 4,
					}}
				/>
				<button type="submit" style={{ borderColor: "#eaeaea", backgroundColor: "#fff" }}>
					Add
				</button>
			</form>
			<div>
				{todos.length === 0 && <div style={{ textAlign: "center" }}>Add some todos</div>}
				{todos.map((todo) => (
					<div
						key={`${todo.id}`}
						style={{
							padding: 4,
							borderBottom: "1px solid #ccc",
							display: "flex",
						}}
					>
						<span style={{ flex: 1 }}>{todo.title}</span>
						<span style={{ cursor: "pointer" }} onClick={() => removeTodo(todo.id)}>
							&times;
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default TodosScreen;
