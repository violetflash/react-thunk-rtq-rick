import { ColorModeScript } from "@chakra-ui/react";
import 'focus-visible/dist/focus-visible';
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import './index.css';
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)

