const deps = require("./package.json").dependencies;

module.exports = {
  name: "checkout",
  exposes: {
    "./Checkout": "./src/Checkout",
  },
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    search: "search@http://localhost:3001/remoteEntry.js",
    checkout: "checkout@http://localhost:3002/remoteEntry.js",
    carousel: "carousel@http://localhost:3003/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
