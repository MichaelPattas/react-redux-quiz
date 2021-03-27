import React from "react";
import reducers from "./reducers";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initialState,
        compose(applyMiddleware(thunk))
      )}
    >
      {children}
    </Provider>
  );
};
