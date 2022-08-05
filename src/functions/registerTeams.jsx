
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

export const createTeamsID = (list) => {
    if(list.length >= 1){
        const arrayID = list.map((team) => team.id);
        const maxValueID = arrayID.reduce((a, b) => Math.max(a,b))
        return maxValueID + 1;
    }

    return 1;
}

export const getTeams = () => {
    const prevData = localStorage.getItem("dataTeams");
    return prevData ? JSON.parse(prevData) : [];
}

export const setTeams = (data) => {
    const prevData = getTeams();
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


