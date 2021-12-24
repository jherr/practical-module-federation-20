import React from "react";
import ReactDOM from "react-dom";

// const Header = React.lazy(() => import("my-nav/Header"));

import "./index.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //   logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

class FederatedWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //   logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.error || <div>Something went wrong.</div>;
    }

    return (
      <React.Suspense fallback={this.props.delayed || <div />}>
        {this.props.children}
      </React.Suspense>
    );
  }
}

const wrapComponent =
  (Component) =>
  ({ error, delayed, ...props }) =>
    (
      <FederatedWrapper error={error} delayed={delayed}>
        <Component {...props} />
      </FederatedWrapper>
    );

const Header = wrapComponent(React.lazy(() => import("my-nav/Header")));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    {/* <ErrorBoundary>
      <React.Suspense fallback={<div />}>
        <Header />
      </React.Suspense>
    </ErrorBoundary> */}
    {/* <FederatedWrapper
      error={<div>Temporary Header</div>}
      delayed={<div>Loading header...</div>}
    >
      <NavHeader />
    </FederatedWrapper> */}
    <Header />
    <div className="mt-10">Home page</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
