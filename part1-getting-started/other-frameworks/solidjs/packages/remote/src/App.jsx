import { render } from "solid-js/web";

import Widget from "./Widget";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <Widget />
  </div>
);

render(App, document.getElementById("app"));
