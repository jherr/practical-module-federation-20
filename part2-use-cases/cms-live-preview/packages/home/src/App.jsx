import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import "./index.scss";

const Shell = React.lazy(() => import("admin/Shell"));
const EmbedPage = React.lazy(() => import("admin/EmbedPage"));
const EmbedEditor = React.lazy(() => import("admin/EmbedEditor"));

const Page = () => {
  const { page } = useParams();
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <EmbedPage page={page} />
    </React.Suspense>
  );
};

const Editor = () => {
  const { page } = useParams();
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <EmbedEditor page={page} />
    </React.Suspense>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = () => {
  const [current, setCurrent] = useState("Display");
  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {["Display", "Edit"].map((tab) => (
            <a
              key={tab}
              className={classNames(
                current === tab
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              )}
              aria-current={current === tab}
              onClick={(evt) => {
                evt.preventDefault();
                setCurrent(tab);
              }}
            >
              {tab}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {current === "Display" && <Page />}
        {current === "Edit" && <Editor />}
      </div>
    </div>
  );
};

const PageTitle = () => {
  const { page } = useParams();
  return <h1 className="text-white">Home Page: {page}</h1>;
};

const App = () => (
  <div className="max-w-7xl mx-auto">
    <Router>
      <React.Suspense fallback={<div>Loading</div>}>
        <Shell>
          <header className="bg-green-700 text-white w-full font-bold text-3xl">
            <h1 className="p-5">
              <Routes>
                <Route path="/:page" element={<PageTitle />} />
                <Route path="/" element={<h1>Home Page</h1>} />
              </Routes>
            </h1>
          </header>
          <div>
            <Routes>
              <Route path="/:page" element={<Tabs />} />
              <Route path="/" element={<div>Home</div>} />
            </Routes>
          </div>
        </Shell>
      </React.Suspense>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
