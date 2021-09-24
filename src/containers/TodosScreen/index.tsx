import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./style.scss";

import { selectTodoCategories, TodosState } from "store";
import TodoItem, { Guid } from "scripts/classes/TodoItem";
import { onDragEnd } from "scripts/draggableUtils";

interface Props {
	removeTodo: (removeId: Guid) => void;
	updateAllTodos: (updatedTodos: TodosState["todos"]) => void;
}

const TodosScreen = ({ removeTodo, updateAllTodos }: Props): ReactElement => {
	const todoCategories = useSelector(selectTodoCategories);

	return (
		<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", height: "100%" }}>
			<DragDropContext onDragEnd={(result) => onDragEnd(result, todoCategories, updateAllTodos)}>
				{Object.entries(todoCategories).map(([categoryKey, category], index) => {
					return (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
							key={categoryKey}
						>
							<h2>{category.visibleName}</h2>
							<div style={{ margin: 8 }}>
								<Droppable droppableId={categoryKey} key={categoryKey}>
									{(provided, snapshot) => {
										return (
											<div
												{...provided.droppableProps}
												ref={provided.innerRef}
												style={{
													background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
													padding: 4,
													width: 250,
													minHeight: 500,
												}}
											>
												{category.items.map((item: TodoItem, index: number) => {
													return (
														<Draggable key={item.id} draggableId={item.id} index={index}>
															{(provided, snapshot) => {
																return (
																	<div
																		ref={provided.innerRef}
																		onClick={() => removeTodo(item.id)}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																		style={{
																			userSelect: "none",
																			padding: 16,
																			margin: "0 0 8px 0",
																			minHeight: "50px",
																			backgroundColor: snapshot.isDragging
																				? "#263B4A"
																				: "#456C86",
																			color: "white",
																			...provided.draggableProps.style,
																		}}
																	>
																		{item.title + " - " + category.visibleName}
																	</div>
																);
															}}
														</Draggable>
													);
												})}
												{provided.placeholder}
											</div>
										);
									}}
								</Droppable>
							</div>
						</div>
					);
				})}
			</DragDropContext>
		</div>
	);
};

export default TodosScreen;
