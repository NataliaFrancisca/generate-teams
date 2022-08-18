import { useState, useRef } from "react";

import { InputSpinner } from "./style";

import { getPlayers } from "../../functions/registerPlayer"; 
import { setTeams } from "../../functions/registerTeams";

import { generateTeams, generateRandomListOfPlayers } from "../../functions/createTeams";

const FormTeam = ({onUpdateStates}) => {

    const [numberOfPlayers, setNumberOfPlayers] = useState(2);
    const refButtonDecrement = useRef();
    const refButtonIncrement = useRef();

    const totalPlayers = getPlayers().length;

    const onHandleForm = (e) => {
        e.preventDefault();

        if(numberOfPlayers < 2 || numberOfPlayers > totalPlayers){
            return false;
        } 
        createTeams();
        handleSpinnerButtons();
    }

    const createTeams = () => {
        const randomListPlayers = generateRandomListOfPlayers();
        const teams = generateTeams(numberOfPlayers, randomListPlayers);
        setTeams(teams);
        onUpdateStates();
    }

    const increment = () => setNumberOfPlayers(numberOfPlayers + 1);
    const decrement = () => setNumberOfPlayers(numberOfPlayers - 1);

    const handleSpinnerButtons = () => {
        const handleDecrementButton = numberOfPlayers <= 2 ? true : false;
        const handleIncrementButton = numberOfPlayers >= (totalPlayers / 2) ? true : false;
        refButtonDecrement.current.disabled = handleDecrementButton;
        refButtonIncrement.current.disabled = handleIncrementButton;
    }
    
    return(
        <InputSpinner onSubmit={onHandleForm}>
            <button onClick={decrement} ref={refButtonDecrement}>-</button>
                <span>{numberOfPlayers}</span>
            <button onClick={increment} ref={refButtonIncrement}>+</button>
        </InputSpinner>
    )
}

export default FormTeam;