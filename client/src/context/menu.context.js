import {createContext} from "react";

export const MenuContext = createContext({
    isChanges: false,
    setIsChanges: (something) => {}
});