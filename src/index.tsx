import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import reportWebVitals from "scripts/reportWebVitals";
import store from "store";
import App from "App";

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<App />
		</ReduxProvider>
	</React.StrictMode>,
	document.querySelector("#root")
);

reportWebVitals();
