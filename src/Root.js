import React from "react";
import reducers from "./reducers";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
