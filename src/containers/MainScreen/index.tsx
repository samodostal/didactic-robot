import { ReactElement, useCallback } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";

import { addTodoItem, removeTodoItem, selectTodos } from "store";
import TodoItem, { Guid } from "scripts/classes/TodoItem";
import NewTodoInput from "components/NewTodoInput";
import TodosScreen from "containers/TodosScreen";

const MainScreen = (): ReactElement => {
	const dispatch = useDispatch();

	const createTodo = useCallback((newTodo: TodoItem): void => {
		dispatch(addTodoItem(newTodo));
	}, []);

	const removeTodo = useCallback((removeId: Guid): void => {
		dispatch(removeTodoItem(removeId));
	}, []);

	return (
		<div className="main-screen">
			<h2 className="main-screen__header">Todo Website</h2>
			<NewTodoInput createTodo={createTodo} />
			<TodosScreen removeTodo={removeTodo} />
		</div>
	);
};

export default MainScreen;
