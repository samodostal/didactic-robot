import { ReactElement } from "react";
import { OneDayInMs } from "store";

const prettyDate = (date: Date): string => {
	const day = date.toLocaleString("default", { day: "2-digit" });
	const month = date.toLocaleString("default", { month: "short" });
	return day + " " + month;
};

const formatDate = (date: Date): ReactElement => {
	const now = new Date();

	const dateWithoutHours = date.setHours(0, 0, 0, 0);
	const nowWithoutHours = now.setHours(0, 0, 0, 0);

	if (dateWithoutHours < nowWithoutHours) {
		return <span className="todo-list-item--overdue">{prettyDate(date)}</span>;
	} else if (dateWithoutHours > nowWithoutHours) {
		const difference = dateWithoutHours - nowWithoutHours;
		if (difference === OneDayInMs) {
			return <>Tomorrow</>;
		} else {
			return <>{prettyDate(date)}</>;
		}
	} else {
		return <>Today</>;
	}
};

export { formatDate };
