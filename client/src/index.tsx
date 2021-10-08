import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);

