import { createContext } from "react";
import PropertiesProvider from "./properties";

const Root = createContext

const RootContext = ({children}) => {
    <Root.povider>
        <PropertiesProvider>
           {children}
        </PropertiesProvider>
    </Root.povider>
}

export default RootContext;

