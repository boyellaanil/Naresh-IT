import { createContext } from "react";

export let messageContext=createContext();
let message="Some people buy a new vehicle from the context";
let MessageProvider=({children})=>{
    return <messageContext.Provider value={message}>{children}</messageContext.Provider>
};

export default MessageProvider;