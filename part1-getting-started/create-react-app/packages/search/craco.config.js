const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const fs = require("fs");

const deps = require("./package.json").dependencies;

const exposeDirectory = (dirName) =>
  fs.readdirSync(dirName).reduce((exposes, file) => {
    exposes[`./${file.replace(/[.].*$/, "")}`] = `${dirName}/${file}`;
    return exposes;
  }, {});

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto";

      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins.unshift(
        new ModuleFederationPlugin({
          name: "search",
          filename: "remoteEntry.js",
          remotes: {
            home: "home@http://localhost:3000/remoteEntry.js",
            search: "search@http://localhost:3001/remoteEntry.js",
            checkout: "checkout@http://localhost:3002/remoteEntry.js",
            carousel: "carousel@http://localhost:3003/remoteEntry.js",
          },
          exposes: exposeDirectory("./src/federated"),
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
    },
  },
};
