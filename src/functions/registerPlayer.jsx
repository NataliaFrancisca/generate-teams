
// ONE PLAYER
export const getPlayer = (id) => {
    const dataPlayers = getPlayers();
    return dataPlayers.find((player) => player.id === id);
}

export const setPlayer = (data) => {
    const prevData = getPlayers();
    localStorage.setItem("dataPlayers", JSON.stringify([...prevData, data]))
}

export const editPlayer = (id, newData) => {
    const players = getPlayers();
    const dataEdited = { name: newData.name, level: +newData.level, id: id }

    const result = players.map((player) => player.id == id ? dataEdited : player);
    setPlayers(result);
}

export const deletePlayer = (id) => {
    const dataPlayers = getPlayers();
    const newDataPlayers = dataPlayers.filter((player) => player.id !== id);
    setPlayers(newDataPlayers);
}

export const createID = () => {
    const players = getPlayers();

    if(players.length >= 1){
        const arrayID = players.map((player) => player.id);
        const maxValueID = arrayID.reduce((a, b) => Math.max(a,b))
        return maxValueID + 1;
    }

    return 1;
}

export const checkDuplicate = (data) => {
    const dataPlayers = getPlayers();
    const compareData = {name: data.name, level: data.level};
    return dataPlayers.some((player) => JSON.stringify({name: player.name, age: player.age, level: player.level}) === JSON.stringify(compareData));
}

// ALL PLAYERS
export const getPlayers = () => {
    const prevData = localStorage.getItem("dataPlayers");
    return prevData ? JSON.parse(prevData) : [];
}

export const setPlayers = (data) => {
    localStorage.setItem("dataPlayers", JSON.stringify(data))
}


