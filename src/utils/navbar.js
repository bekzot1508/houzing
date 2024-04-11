import useUniqueId from "../hooks/useId";
import HomePage from '../pages/Home'
import PropertiesPage from '../pages/Properties'

export  const navbar = [
    {
      id: useUniqueId, 
      element: <HomePage/>, 
      title: "Home", 
      path: "/home", 
      private: false, 
      hidden: false
    },
    {
      id: useUniqueId, 
      element: <PropertiesPage/>, 
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

 