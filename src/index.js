import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { element } from 'prop-types';
import { Quiz } from './Components/Quiz';
import NoPage from './Components/NoPage';

const router = createBrowserRouter([
  {path: "/", element: <App /> , errorElement: <NoPage />  },
  {path: "/quiz", element: <Quiz />}
], {basename: "/online_quiz"})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
