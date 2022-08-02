import { combineReducers } from "redux"
import { reducerModalPlayers, reducerModalTeams } from "./modal";

export const rootReducer = combineReducers({
    reducerModalPlayers,
    reducerModalTeams
})