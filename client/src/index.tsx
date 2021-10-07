import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>,
  document.getElementById('root')
);

