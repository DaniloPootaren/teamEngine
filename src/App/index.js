import React from "react";
import { HashRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import { AppWrapper, GlobalStyle } from "../App/components/styled";
import Routes from "../App/routes"

WebFont.load({
  google: {
    families: ["Open Sans:400,600,700", "sans-serif"],
  },
});

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Routes />
      </AppWrapper>
      <GlobalStyle />
    </Router>
  );
};

export default App;
