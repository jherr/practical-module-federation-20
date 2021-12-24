import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const FallbackHeader = React.lazy(() => import("nav/build/Header"));
const Header = React.lazy(() => import("mf-nav/Header"));

class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading fallback header</div>}>
          <FallbackHeader />
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Header loading</div>}>
        <Header />
      </React.Suspense>
    );
  }
}

const App = () => (
  <div className="mx-auto max-w-7xl">
    <HeaderWrapper />
    <div>Hi there, I'm React from React.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
