import { reducerActionType } from "../types/reducerActionsType";

export type LanguageType = {
    status: string | null
}

export const languageInitialState: LanguageType = {

    //Concatenasse para poder usar o localStorage
    status: localStorage.getItem('language') ? localStorage.getItem('language') : 'english'
}


export const languageReducer = (state: LanguageType, action: reducerActionType) => {

    switch(action.type) {
        case 'Change_language':
            return {...state,  status: action.payload.status}
        break
    }

    return state
}