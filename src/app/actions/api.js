var api = {
  register: (auth) => {
    console.log('[Register API] POST /api/register ' + JSON.stringify(auth));
    return fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(auth),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log('[Register API] Response ' + JSON.stringify(response));
        return response;
      })
      .catch(() => {
        console.log('[Register API] An error occurred.');
      });
  },
  login: (auth) => {
    console.log('[Login API] POST /api/login ' + JSON.stringify(auth));
    return fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(auth),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log('[Login API] Response ' + JSON.stringify(response));
        return response;
      })
      .catch(() => {
        console.log('[Login API] An error occurred.');
      });
  }
};

export default api;