import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./style.scss";

import { selectTodoCategories, TodosState } from "store";
import TodoItem, { Guid } from "scripts/classes/TodoItem";
import { onDragEnd } from "scripts/draggableUtils";
import TodoListItem from "components/TodoListItem";

interface Props {
	removeTodo: (removeId: Guid) => void;
	updateAllTodos: (updatedTodos: TodosState["todos"]) => void;
}

const TodosScreen = ({ removeTodo, updateAllTodos }: Props): ReactElement => {
	const todoCategories = useSelector(selectTodoCategories);

	return (
		<div className="todos-screen">
			<DragDropContext onDragEnd={(result) => onDragEnd(result, todoCategories, updateAllTodos)}>
				{Object.entries(todoCategories).map(([categoryKey, category]) => (
					<div key={categoryKey} className="todos-screen__category">
						<header className="todos-screen__category-header">
							<h2>
								{category.visibleName}
								<span>{category.items.length}</span>
							</h2>
							<i className="todos-screen__icon-more" />
						</header>
						<Droppable droppableId={categoryKey} key={categoryKey}>
							{(provided) => {
								return (
									<div
										className="todos-screen__droppable-area"
										{...provided.droppableProps}
										ref={provided.innerRef}
									>
										{category.items.map((item: TodoItem, index: number) => {
											return (
												<Draggable key={item.id} draggableId={item.id} index={index}>
													{(provided, snapshot) => (
														<TodoListItem
															todo={item}
															status={category.visibleName}
															draggableProps={{ provided, snapshot }}
														/>
													)}
												</Draggable>
											);
										})}
										{provided.placeholder}
									</div>
								);
							}}
						</Droppable>
					</div>
				))}
			</DragDropContext>
		</div>
	);
};

export default TodosScreen;
