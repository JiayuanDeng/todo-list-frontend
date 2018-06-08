import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
// import ComponentTest from './app/pages/ComponentTest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
