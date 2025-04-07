class HTTPRequest {
  get(uri, params) {
    return new Promise((resolve, reject) => {
      fetch(uri + (params ? `/${params}` : ""), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  post(uri,body) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(body)
      fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:data
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
export default new HTTPRequest();
