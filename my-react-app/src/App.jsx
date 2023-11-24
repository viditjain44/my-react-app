 import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Portfolio from './components/Portfolio/Portfolio'
 import './App.css'; 
 import { createBrowserRouter,RouterProvider} from "react-router-dom";


 const router = createBrowserRouter([
  {
    path: "/",
    element: '',
    children: [
      {
        path:'',
        element:<Dashboard/>
      },
      {
        path: "portfolio",
        element: <Portfolio/>
      },
    ],
  },
]);

 function App() {
   return(
    <div>
  <RouterProvider router = {router}/>
   </div>
  );
}
 
 export default App;

