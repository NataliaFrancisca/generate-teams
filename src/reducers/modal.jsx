export const reducerModalPlayers = (state = false, action) => {
    switch(action.type){
        case "modal/players": {
            return !state;
        }
        default: {
            return state;
        }
    }
}

export const reducerModalTeams = (state = false, action) => {
    switch(action.type){
        case "modal/teams": {
            return !state;
        }
        default: {
            return state;
        }
    }
}
