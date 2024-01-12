import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MouseContextProvider from "./hoc/mouse-context";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<MouseContextProvider>
		<App />
	</MouseContextProvider>
);
