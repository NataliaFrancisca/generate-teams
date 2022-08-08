import { useEffect, useState } from "react";

import { FormTeamStyled  } from "../../styles/form"
import { getPlayers } from "../../functions/registerPlayer"; 
import { setTeams, createTeamsID, setPlayersLeftOver } from "../../functions/registerTeams";

const FormTeam = () => {

    const [numberOfPlayers, setNumberOfPlayers] = useState();
    const [listOfPlayers, setListOfPlayers] = useState();
    const [listOfTeams, setListOfTeams] = useState([]);

    const onHandleForm = () => {
        event.preventDefault();
        if(numberOfPlayers < 1 || numberOfPlayers > getPlayers().length){
            console.log("Hey, this number isn't possible! Choose another")
            return false;
        } 
        generateTeams();
    }

    const generateRandomListOfPlayers = () => {
        let randomPlayers = [];
        const playersData = getPlayers();

        const getRandomPlayer = () => {
            const randomNumber = Math.floor(Math.random() * playersData.length);
            const getRandomPlayer = playersData[randomNumber];
            const alreadyExist = randomPlayers.find(player => player.id == getRandomPlayer.id);
            alreadyExist ? false : randomPlayers.push(getRandomPlayer);
        }

        while(randomPlayers.length !== playersData.length){
            getRandomPlayer();
        }
        
        console.log("a lista foi atualizada")
        setListOfPlayers(randomPlayers);
    }

    useEffect(() => {
        generateRandomListOfPlayers();
    },[])

    useEffect(() => {
        getPlayersLeftOver();
    },[listOfTeams])

    const generateTeams = () => {
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

        setListOfTeams(nextStateTeams);
        setTeams(nextStateTeams);
        window.dispatchEvent(new Event("storage"));
    }

    const getPlayersLeftOver = () => {
        let playerWasSelected = [];

        listOfTeams.map(teams => teams.players).forEach(player => player ? playerWasSelected.push(...player) : false);
    
        if(playerWasSelected.length !== 0 && playerWasSelected.length < listOfPlayers.length){
            const howMuchPlayersWasLeftOver = listOfPlayers.length - playerWasSelected.length;
            const playersThatLeftOver = listOfPlayers.slice(-howMuchPlayersWasLeftOver);
            
            setPlayersLeftOver(playersThatLeftOver);
            window.dispatchEvent(new Event("storage"));
        }else{
            setPlayersLeftOver([]);
        }
    }

    return(
        <FormTeamStyled onSubmit={onHandleForm}>
            <input 
                type="number" 
                minLength={1} 
                placeholder="How much players do you want per team?" 
                onChange={(event) => setNumberOfPlayers(+event.target.value)}
            />
            <button type="submit">CREATE TEAMS</button>
        </FormTeamStyled>
    )
}

export default FormTeam;