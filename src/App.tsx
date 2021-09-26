import { ReactElement } from "react";
import "./styles/global.scss";

import MainScreen from "containers/MainScreen";
import EditTodoModal from "components/EditTodoModal";

const App = (): ReactElement => {
	return (
		<>
			<MainScreen />
			<EditTodoModal />
		</>
	);
};

export default App;
