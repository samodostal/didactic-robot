type Status = "Todo" | "Doing" | "Done";
type Priority = "No" | "Low" | "Medium" | "Large";

export interface TodoItem {
	id: string;
	title: string;
	status: Status;
	priority: Priority;
	createdDate: Date;
	dueDate: Date;
}
