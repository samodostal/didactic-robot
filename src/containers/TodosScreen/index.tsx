import { ReactElement, useState } from "react";

const TodosScreen = (): ReactElement => {
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState<string[]>(["hello there", "general kenobi"]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!newTodo) return;

		const newTodos = [newTodo, ...todos];
		setTodos(newTodos);
		setNewTodo("");
	};

	const removeTodo = (removeIndex: number): void => {
		const filteredTodos = todos.filter((_, index) => index !== removeIndex);
		setTodos(filteredTodos);
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
				{todos.map((todo, i) => (
					<div
						key={`${todo}-${i}`}
						style={{
							padding: 4,
							borderBottom: "1px solid #ccc",
							display: "flex",
						}}
					>
						<span style={{ flex: 1 }}>{todo}</span>
						<span style={{ cursor: "pointer" }} onClick={() => removeTodo(i)}>
							&times;
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default TodosScreen;
