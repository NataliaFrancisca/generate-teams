import { useState } from "react";

import { FormTeamStyled  } from "../../styles/form"
import { getPlayers } from "../../functions/registerPlayer"; 

const FormTeam = () => {

    const [numberOfPlayers, setNumberOfPlayers] = useState();


    const onHandleForm = () => {
        event.preventDefault();
        if(numberOfPlayers < 1 || numberOfPlayers > getPlayers().length){
            console.log("Hey, this number isn't possible! Choose another")
            return false;
        } 

        console.log(numberOfPlayers)
        console.log("Let's go create the teams :)");
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