
// ONE PLAYER
// export const getTeam = (id: number) => {
//     const dataPlayers = getTeams();
//     return dataPlayers.find((player:TTeam) => player.id === id);
// }

// export const setTeam = (data: TTeam) => {
//     const prevData = getTeams();
//     localStorage.setItem("dataTeams", JSON.stringify([...prevData, data]))
// }

// TEAMS
export const getTeams = () => {
    const prevData = localStorage.getItem("dataTeams");
    return prevData ? JSON.parse(prevData) : [];
}

export const setTeams = (data) => {
    localStorage.setItem("dataTeams", JSON.stringify(data))
}


// PLAYER LEFTOVER
export const setPlayersLeftOver = (data) => {
    localStorage.setItem("dataPlayersLeftOver", JSON.stringify(data));
}

export const getPlayersLeftOver = () => {
    const prevData = localStorage.getItem("dataPlayersLeftOver");
    return prevData ? JSON.parse(prevData) : [];
}


