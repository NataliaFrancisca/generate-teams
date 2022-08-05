export const reducerModalCreatePlayer = (state = false, action) => {
    switch(action.type){
        case "modal/create/player": {
            return !state;
        }
        default: {
            return state;
        }
    }
}

export const reducerModalEditPlayer = (state = false, action) => {
    switch(action.type){
        case "modal/edit/player": {
            return !state;
        }
        default: {
            return state;
        }
    }
}

export const reducerModalCreateTeams = (state = false, action) => {
    switch(action.type){
        case "modal/teams": {
            return !state;
        }
        default: {
            return state;
        }
    }
}

