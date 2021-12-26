fetch("/public/config.json")
  .then((res) => res.json())
  .then((config) => {
    window.mfeUrl = config.mfeUrl;
    import("./App");
  });
