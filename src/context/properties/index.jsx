import { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContext= createContext

const PropertiesProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, []);
    <PropertiesContext.povider value={[state, dispatch]}> 
        {children} 
    </PropertiesContext.povider>
}

export default PropertiesProvider;

