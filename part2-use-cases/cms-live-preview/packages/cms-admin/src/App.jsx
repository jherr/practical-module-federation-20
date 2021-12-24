import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { useQuery } from "react-query";

import "./index.scss";

import Shell from "./Shell";
import Page from "./Page";
import Editor from "./Editor";
import { fetchPage } from "./api";

const PageAdmin = () => {
  const { page } = useParams();
  const { data, isLoading } = useQuery(["getPage", { page }], () =>
    fetchPage()(page)
  );
  const [fields, setFields] = React.useState({});

  React.useEffect(() => {
    setFields(data ?? {});
  }, [data]);

  return (
    <div>
      {!isLoading && fields && (
        <div className="grid grid-cols-2 gap-4">
          <Editor
            {...fields}
            page={page}
            onChange={(k, v) => setFields({ ...fields, [k]: v })}
          />
          <Page {...fields} />
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Shell>
    <Router>
      <div className="max-w-7xl mx-auto">
        <header className="bg-blue-700 text-white w-full font-bold text-3xl">
          <h1 className="p-5">CMS Editor</h1>
        </header>
        <div className="mt-10 text-3xl">
          <Routes>
            <Route path="/:page" element={<PageAdmin />} />
            <Route path="/" element={<div>Home</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  </Shell>
);

ReactDOM.render(<App />, document.getElementById("app"));
