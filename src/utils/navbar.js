import useUniqueId from "../hooks/useId";
import HomePage from '../pages/Home'
import PropertiesPage from '../pages/Properties'

  const navbar = [
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
    }
]

export default navbar;