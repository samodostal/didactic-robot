import { FormEvent, ReactElement, useState } from "react";

import "./style.scss";

import TodoItem from "scripts/classes/TodoItem";

interface Props {
	createTodo: (newTodo: TodoItem) => void;
}

const NewTodoInput = ({ createTodo }: Props): ReactElement => {
	const [newTodo, setNewTodo] = useState<TodoItem>(new TodoItem(""));

	const onFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (newTodo.title) {
			createTodo(newTodo);
			resetNewTodo();
		}
	};

	const resetNewTodo = (): void => {
		setNewTodo(new TodoItem(""));
	};

	return (
		<form className="new-todo__form" onSubmit={onFormSubmit}>
			<input
				type="text"
				name="newTodo"
				className="new-todo__input"
				value={newTodo.title}
				onChange={({ currentTarget: { value } }) => setNewTodo({ ...newTodo, title: value })}
				placeholder="Add a task..."
			/>
			<button data-tip="New Todo" type="button" className="new-todo__icon new-todo__icon-tune" />
			<button type="submit" className="new-todo__icon new-todo__icon-send" />
		</form>
	);
};

export default NewTodoInput;
