import {createContext} from "react";

export const GraphContext = createContext({
    activeGraph: null,
    setActiveGraph: (something) => {},
    dataToGraph: null
});