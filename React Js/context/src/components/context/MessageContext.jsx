import { createContext } from "react";

export let messageContext=createContext();

let MessageProvider=({children})=>{
    let message="Some people buy a new vehicle from the context";
    
    return( <messageContext.Provider value={message}>
        {children}
        </messageContext.Provider>
        );
};

export default MessageProvider;