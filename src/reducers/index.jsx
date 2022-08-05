import { combineReducers } from "redux"
import { reducerModalCreatePlayer, reducerModalEditPlayer, reducerModalCreateTeams} from "./modal";

export const rootReducer = combineReducers({
    reducerModalCreatePlayer,
    reducerModalEditPlayer,
    reducerModalCreateTeams
})