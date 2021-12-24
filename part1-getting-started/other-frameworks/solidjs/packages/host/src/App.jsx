import { render } from "solid-js/web";

import Widget from "remote/Widget";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <Widget />
  </div>
);
render(App, document.getElementById("app"));
