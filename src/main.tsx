import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./store/index.tsx"
import React from "react"
import axe from "react-axe"
import { BrowserRouter } from "react-router-dom"

axe(React, ReactDOM, 1000)

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
)
