import React from "react";
import App from "./App.jsx";
import { createRoot, Root } from "react-dom/client";

// const root = createRoot(document.getElementById("root") as HTMLElement);
// ReactDOM.render(<Sample />, document.getElementById('root'));
const root = createRoot(document.getElementById("root"));
root.render(<App />);
