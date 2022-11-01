import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { reducerActionType } from "../types/reducerActionsType";

//Imports
import { themeReducer, themeInitialState, ThemeType  } from "../reducers/themeReducer";
import { languageReducer, languageInitialState, LanguageType} from "../reducers/languageReducer"

//Campo editável
type initialStateType = {
    theme: ThemeType,
    language: LanguageType
}

type ContextType = {
    state: initialStateType
    dispatch: React.Dispatch<any>
}

///Campo editável
const initialState = {
    theme: themeInitialState,
    language: languageInitialState
}



export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

///Campo editável
const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    theme: themeReducer(state.theme, action),
    language: languageReducer(state.language, action)
})

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState)

    //coloque dentro do useEffect as função que queira guardar no localStorage
    useEffect(() => {
        localStorage.setItem('theme', state.theme.status as string)
        localStorage.setItem('language', state.language.status as string)
    })

    return (
        <Context.Provider value={{state, dispatch}} >
            {children}
        </Context.Provider>
    )

}