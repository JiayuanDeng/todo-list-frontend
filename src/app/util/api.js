var req = {
  get: (path) =>
    fetch(path, { method: 'GET' }),
  post: (path, data) =>
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then()
};

var api = {
  register: (data) => {
    return new Promise((resolve, reject) => {
      console.log('[Register API] POST /api/register ' + JSON.stringify(data));
      req.post('/api/register', data)
        .then(response => response.json())
        .then(data => {
          console.log('[Register API] Response ' + JSON.stringify(data));
          resolve(data);
        })
        .catch(() => {
          console.log('[Register API] An error occurred.');
        });
    });
  },
  login: (data) => {

    console.log('[Login API] POST /api/login ' + JSON.stringify(data));
    return req.post('/api/login', data)
      .then(response => response.json())
      .then(data => {
        console.log('[Login API] Response ' + JSON.stringify(data));
        return data;
      })
      .catch((err) => {
        console.log('[Login API] An error occurred.');
      });

  }
};

export default api;