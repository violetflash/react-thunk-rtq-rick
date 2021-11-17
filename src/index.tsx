import * as React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import 'focus-visible/dist/focus-visible';
import {BrowserRouter} from "react-router-dom";
import {ColorModeScript} from "@chakra-ui/react";
import {store} from "./redux";
import {App} from "./App";
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
    <React.StrictMode>
        <ColorModeScript/>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
)