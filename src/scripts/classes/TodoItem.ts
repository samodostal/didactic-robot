import { v4 as uuidv4 } from "uuid";

export type Guid = string;
export type Timestamp = number;
export type Priority = "No" | "Low" | "Medium" | "Large";

class TodoItem {
	public id: Guid;
	public title: string;
	public priority: Priority;
	public dueDate: Timestamp | null;

	constructor(title: string, priority?: Priority, dueDate?: Timestamp) {
		this.id = uuidv4();
		this.title = title;
		this.priority = priority || "No";
		this.dueDate = dueDate || null;
	}
}

export default TodoItem;
