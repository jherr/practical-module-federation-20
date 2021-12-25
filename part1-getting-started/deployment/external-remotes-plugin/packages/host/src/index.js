fetch("/public/config.json")
  .then((res) => res.json())
  .then((config) => {
    console.log(config);
    window.mfeUrl = config.mfeUrl;
    import("./App");
  });
