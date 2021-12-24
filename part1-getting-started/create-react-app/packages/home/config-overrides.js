const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = function override(config) {
  config.output.publicPath = "auto";

  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.unshift(
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        home: "home@http://localhost:3000/remoteEntry.js",
        search: "search@http://localhost:3001/remoteEntry.js",
        checkout: "checkout@http://localhost:3002/remoteEntry.js",
        carousel: "carousel@http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        "./Container": "./src/Container.jsx",
        "./Header": "./src/Header.jsx",
        "./Footer": "./src/Footer.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    })
  );
  return config;
};
