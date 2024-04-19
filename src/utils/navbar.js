import React, { Suspense, lazy } from "react";
import useUniqueId from "../hooks/useId";
const PropertiesPage = lazy(() => import('../pages/Properties'))
const HomePage = lazy(() => import('../pages/Home'))


export const navbar = [
    {
      id: useUniqueId, 
      element: <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage/>
      </Suspense>,  
      title: "Home", 
      path: "/home", 
      private: false, 
      hidden: false
    },
    {
      id: useUniqueId, 
      element: <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage/>
      </Suspense>, 
      title: "Properties", 
      path: "/properties", 
      private: false, 
      hidden: false
    },
    {
      id: useUniqueId, 
      element: <h1>Generic sign IN</h1>, 
      title: "Sign IN", 
      path: "/signin", 
      private: false, 
      hidden: true
    },
    {
      id: useUniqueId, 
      element: <h1>Generic sign UP</h1>, 
      title: "Sign UN", 
      path: "/signup", 
      private: false, 
      hidden: true
    },
]

 