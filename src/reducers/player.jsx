export const reducerSavePlayerData = (state = [], action) => {
    switch(action.type){
        case "set/player/form":{
            return action.payload;
        }
        default: {
            return state;
        }
    }
}