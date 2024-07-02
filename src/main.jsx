import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './Layout/App.jsx';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store/store.js';

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './Home/Home.jsx';
import Search from './Search/Search.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path:"/search", element: <Search /> },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <RouterProvider router={router} />,
  </Provider>,
)
