import React from "react";
import ReactDOM from "react-dom/client";

// Оборачиваю все приложение для возможности навигации по приложению
import { BrowserRouter } from "react-router-dom";

// Redux
// Provider - оборачиваю все приложение и передаю ему в качестве пропса store, чтобы все приложение имело доступ к state'ам в store
// configureStore - создаю стор. Можно выделять стор в отдельный файл, а потом подключать его и передавать в провайдер
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Импортирую редусеры и передаю их в стор
import counterReducer from "./store/counterSlice";
import userReducer from "./store/userSlice";

import App from "./components/App/App";
import "./index.css";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
