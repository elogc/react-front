import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "babel-polyfill";
import { IntlProvider } from "react-intl";

import configureStore from "app/store";
import MainApp from "app/MainApp";

// Load SCSS
import "../scss/app.scss";

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </IntlProvider>
    </Provider>,
    document.getElementById("root")
  );
};

// Render app
render(MainApp);
