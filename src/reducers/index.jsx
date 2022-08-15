import { combineReducers } from "redux"
import { reducerModalCreatePlayer, reducerModalEditPlayer, reducerModalCreateTeams} from "./modal";
import { reducerSavePlayerData } from "./player";

export const rootReducer = combineReducers({
    reducerModalCreatePlayer,
    reducerModalEditPlayer,
    reducerModalCreateTeams,
    reducerSavePlayerData
})