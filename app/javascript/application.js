// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greetings from './components/greetings';
import store from './redux/store';

function App() {
  return (
    <>
      <Routes>
        <Route path="/articles" element={<Greetings />} />
      </Routes>
    </>
  );
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
