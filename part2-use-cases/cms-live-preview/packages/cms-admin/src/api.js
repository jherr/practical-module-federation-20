export const fetchPage =
  (host = "") =>
  (page) =>
    fetch(`${host}/api/${page}`).then((resp) => resp.json());

export const postPage =
  (host = "") =>
  (data) =>
    fetch(`${host}/api/${data.page}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then((resp) => resp.json());
