import React from "react";
import ReactDOM from "react-dom";

import App from "App";
import reportWebVitals from "scripts/reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector("#root")
);

reportWebVitals();
