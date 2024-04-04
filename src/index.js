// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import './style.css';

// ReactDOM.render(<App/>, document.querySelector("#root"));

// ===========================
import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style.css';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// root.render(
    // <Router basename="/your-repo-name/"> {/* Accurately set basename */}
//         <App />
//     </Router>
// );
