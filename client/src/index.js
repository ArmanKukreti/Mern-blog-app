import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import CategoryPosts from './pages/CategoryPosts';
import Contact from './pages/Contact';
import Register from './pages/Register';
import UserProvider from './context/userContext';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Donation from './pages/Donation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserProvider><Layout/></UserProvider>,
    errorElement: <ErrorPage/>,
    children: [
      {index:true, element: <Landing/>},
      {path: 'home', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'privacy-policy', element: <Privacy/>},
      {path: 'posts/:id', element:<PostDetail/>},
      {path: 'register', element:<Register/>},
      {path: 'login', element:<Login/>},
      {path: 'profile/:id', element:<UserProfile/>},
      {path: 'create', element:<CreatePost/>},
      {path: 'posts/categories/:category', element:<CategoryPosts/>},
      {path: 'myposts/:id', element:<Dashboard/>},
      {path: 'posts/:id/edit', element:<EditPost/>},
      {path: 'posts/:id/delete', element:<DeletePost/>},
      {path: 'about', element: <About/>},
      {path: 'donate', element:<Donation/>},
      {path: 'contact', element:<Contact/>},
      {path: 'logout', element:<Logout/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

