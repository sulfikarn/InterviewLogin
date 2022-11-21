import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import rootReducer from "./reducer/reducer";
import rootSaga from "./reducer/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const action = (type, payload) => {
  console.log("dispatch", { type, payload });
  store.dispatch({ type, payload });
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Provider store={store}>
        <App
          onSubmit={({ username, password }) =>
            action("LOGIN_REQUESTED", { username, password })
          }
          onLogout={() => action("LOGOUT_REQUESTED")}
        />
      </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
