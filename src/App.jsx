
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import UrlShortener from './UrlShortener';
import AddUrl from '../src/AddUrl';
import ViewUrl from './ViewUrl';

const router = createBrowserRouter([
  
  {
    path: "/register",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  }, 
  { 
    path: "/urlshortener",
    element: <UrlShortener />
  },
  {
    path: "/addurl",
    element: <AddUrl />
  },
  {
    path: "/viewurl",
    element: <ViewUrl />
  }
  

] ) ;

const App = () => {
return <RouterProvider router={router} />;
}

export default App;
