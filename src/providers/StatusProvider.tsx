/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, type ReactNode } from "react"


//------------ declaring type --------------
type StatusType = {
    languageStat: "english" | "french";
    setLanguageStat: React.Dispatch<React.SetStateAction<"english" | "french">>;
    isEnglish: boolean
}

// create context 
const StatusContext = createContext<StatusType | undefined>(undefined);


// create and export provider 
export const StatusProvider = ( {children } : {children : ReactNode} )=>{
    const [languageStat, setLanguageStat] = useState<"english" | "french">("english");

    const isEnglish = languageStat === "english"

    // memorizing to prevent re-rander
    const statusObject = useMemo(()=>({languageStat, setLanguageStat,isEnglish}),[languageStat, isEnglish])



    return <StatusContext.Provider value={statusObject}>
        {children}
    </StatusContext.Provider>
}


// create hooks to usecontext 
export const useStatus = ()=>{
    const context = useContext(StatusContext);

    if(!context){
        throw new Error("useStatus must be used within a Provider");
    }

    return context;
}