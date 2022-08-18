import { createTeamsID, setPlayersLeftOver } from "./registerTeams";
import { getPlayers } from "./registerPlayer";

export const generateRandomListOfPlayers = () => {
    const playersData = getPlayers();
    let randomPlayers = [];

    const getRandomPlayer = () => {
        const randomNumber = Math.floor(Math.random() * playersData.length);
        const getRandomPlayer = playersData[randomNumber];
        const alreadyExist = randomPlayers.find(player => player.id == getRandomPlayer.id);
        alreadyExist ? false : randomPlayers.push(getRandomPlayer);
    }

    while(randomPlayers.length !== playersData.length){
        getRandomPlayer();
    }
    
    return randomPlayers;
}

export const generateTeams = (numberOfPlayers, listOfPlayers) => {
    const nextStateTeams = [];
   
    if(numberOfPlayers && listOfPlayers){
        const numberOfTeams = Math.floor(listOfPlayers.length / numberOfPlayers);

        let initialValue = 0;
        let secondValue = numberOfPlayers;

        const getPlayers = () => {
            const team = listOfPlayers.slice(initialValue, secondValue);
            initialValue += numberOfPlayers;
            secondValue += numberOfPlayers;
            return team;
        }

        for(let i = 0; i < numberOfTeams; i++){
            const team = {id: createTeamsID(nextStateTeams), players: getPlayers()};
            nextStateTeams.push(team);
        }
    }

    onSetPlayersLeftOver(listOfPlayers, nextStateTeams);
    return nextStateTeams;
}

export const onSetPlayersLeftOver = (listOfPlayers, listOfTeams) => {

    let playerWasSelected = [];

    listOfTeams.map(teams => teams.players).forEach(player => player ? playerWasSelected.push(...player) : false);

    if(playerWasSelected.length !== 0 && playerWasSelected.length < listOfPlayers?.length){
        const howMuchPlayersWasLeftOver = listOfPlayers.length - playerWasSelected.length;
        const playersThatLeftOver = listOfPlayers.slice(-howMuchPlayersWasLeftOver);
        setPlayersLeftOver(playersThatLeftOver);
    }else{
        setPlayersLeftOver([]);
    }
}