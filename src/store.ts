import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoItem from "scripts/classes/TodoItem";

export interface TodosState {
	todos: {
		todo: {
			visibleName: "Todo";
			items: TodoItem[];
		};
		doing: {
			visibleName: "Doing";
			items: TodoItem[];
		};
		done: {
			visibleName: "Done";
			items: TodoItem[];
		};
	};
}

const initialState: TodosState = {
	todos: {
		todo: {
			visibleName: "Todo",
			items: [new TodoItem("Task 1"), new TodoItem("Task 2"), new TodoItem("Task 3")],
		},
		doing: {
			visibleName: "Doing",
			items: [new TodoItem("Task 4"), new TodoItem("Task 5")],
		},
		done: {
			visibleName: "Done",
			items: [new TodoItem("Task 6")],
		},
	},
};

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		createTodoItem: (state, action: PayloadAction<TodoItem>) => {
			state.todos.todo.items = [action.payload, ...state.todos.todo.items];
		},
		removeTodoItem: (state, action: PayloadAction<string>) => {
			state.todos.todo.items = state.todos.todo.items.filter(({ id }) => id !== action.payload);
			state.todos.doing.items = state.todos.doing.items.filter(({ id }) => id !== action.payload);
			state.todos.done.items = state.todos.done.items.filter(({ id }) => id !== action.payload);
		},
		updateAllTodoItems: (state, action: PayloadAction<TodosState["todos"]>) => {
			state.todos = action.payload;
		},
	},
});

const store = configureStore({
	reducer: {
		todos: todosSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const { createTodoItem, removeTodoItem, updateAllTodoItems } = todosSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const selectTodoCategories = (state: RootState): TodosState["todos"] => state.todos.todos;

export default store;
