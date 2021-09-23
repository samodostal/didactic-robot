import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoItem from "scripts/classes/TodoItem";

interface TodosState {
	todos: TodoItem[];
}

const initialState: TodosState = {
	todos: [new TodoItem("Task 1"), new TodoItem("Task 2")],
};

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodoItem: (state, action: PayloadAction<TodoItem>) => {
			state.todos = [...state.todos, action.payload];
		},
		removeTodoItem: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter(({ id }) => id !== action.payload);
		},
	},
});

const store = configureStore({
	reducer: {
		todos: todosSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const { addTodoItem, removeTodoItem } = todosSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const selectTodos = (state: RootState): TodoItem[] => state.todos.todos;

export default store;
