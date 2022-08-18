import { useEffect, useState, useRef } from "react";

import { InputSpinner } from "./style";

import { getPlayers } from "../../functions/registerPlayer"; 
import { setTeams, setPlayersLeftOver } from "../../functions/registerTeams";
import { generateTeams, getPlayersLeftOver, generateRandomListOfPlayers } from "../../functions/createTeams";

const FormTeam = ({onUpdateStates}) => {

    const [numberOfPlayers, setNumberOfPlayers] = useState(2);
    const [randomListPlayers, setRandomListPlayers] = useState();

    const refButtonDecrement = useRef();
    const refButtonIncrement = useRef();

    const onHandleForm = () => {
        event.preventDefault();
        if(numberOfPlayers < 2 || numberOfPlayers > getPlayers().length){
            console.log("Hey, this number isn't possible! Choose another")
            return false;
        } 
        createTeams();
        handleFormButtons();
    }

    const createTeams = () => {
        const randomListPlayers = generateRandomListOfPlayers();

        const teams = generateTeams(numberOfPlayers, randomListPlayers);
        const playersLeftOver = getPlayersLeftOver(randomListPlayers, teams);

        setTeams(teams);
        setPlayersLeftOver(playersLeftOver);
        setRandomListPlayers(randomListPlayers)
        onUpdateStates();
    }

    const increment = () => setNumberOfPlayers(numberOfPlayers + 1);
    const decrement = () => setNumberOfPlayers(numberOfPlayers - 1);

    const handleFormButtons = () => {
        if(numberOfPlayers <= 2){
            refButtonDecrement.current.disabled = true;
        }else{
            refButtonDecrement.current.disabled = false;
        }
    }
    
    useEffect(() => {
       if(randomListPlayers){
        numberOfPlayers >= randomListPlayers.length  ? refButtonIncrement.current.disabled = true : refButtonIncrement.current.disabled = false;
       }
    },[numberOfPlayers])

    return(
        <InputSpinner onSubmit={onHandleForm}>
            <button onClick={decrement} ref={refButtonDecrement}>-</button>
                <span>{numberOfPlayers}</span>
            <button onClick={increment} ref={refButtonIncrement}>+</button>
        </InputSpinner>
    )
}

export default FormTeam;