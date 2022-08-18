import { useState, useEffect, useRef } from "react";

import { useDispatch } from "react-redux/es/exports";

import { Modal } from "../../styles/modal";
import { Form, GroupLabelInput } from "../../styles/form";

import { setPlayer, createID, checkDuplicate } from "../../functions/registerPlayer";
import { formatString } from "../../utils/formatString";

const FormPlayer = ({onUpdateState}) => {

    const dispatch = useDispatch();
    const closeModal = () => dispatch({type: "modal/create/player"});

    const inputNameRef = useRef();

    const [name, setName] = useState("");
    const [level, setLevel] = useState();
    const [handleError, setHandleError] = useState({name: false, level: false})

    const onHandleInputName = (event) => setName(event.target.value);
    const onHandleInputLevel = (event) => setLevel(+event.target.value);

    const validateInputName = () => {
        const error = name.length < 2 ? "Name must have 2 or more characters." : false;
        setHandleError({...handleError, name: error})
    }

    const validateInputLevel = () => {
        const error = level < 1 || level > 5 ? "Level must be between 1 and 5." : false;
        setHandleError({...handleError, level: error})
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();

        const playerObj = {
            id: createID(),
            name: formatString(name),
            level: level
        }

        if(checkDuplicate(playerObj)){
            alert("Hey, look like that you already have a register :)");
            return false;
        }
        
        if(handleError.name || handleError.level){
            alert("Hey, something wrong with the register :(");
            return false;
        }

        alert("Hey, everthing okay with the register :)")
        setPlayer(playerObj);
        onUpdateState();

        setName("");
        setLevel(0);

        inputNameRef.current.focus();
    }

    useEffect(() => {
        validateInputName();
    },[name])

    useEffect(() => {
        validateInputLevel();
    },[level])
    
    return(
        <Modal>
            <header>
                <h1 id="title-modal">ADD <b>PLAYER</b></h1>
                <button onClick={closeModal} id="button-close-modal">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </header>

            <Form onSubmit={onHandleSubmit}>
                <GroupLabelInput>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name}
                        minLength={2}
                        maxLength={20}
                        required
                        ref={inputNameRef}
                        onChange={(event) => onHandleInputName(event)}
                    />
                    {handleError.name && <span>{handleError.name}</span>}
                </GroupLabelInput>

                <GroupLabelInput>
                    <label>Level:</label>
                    <input 
                        type="number" 
                        name="level" 
                        value={level}
                        minLength={1} 
                        maxLength={5} 
                        required
                        onChange={(event) => onHandleInputLevel(event)}
                    />
                    {handleError.level && <span>{handleError.level}</span>}
                </GroupLabelInput>

                <button type="submit">Register</button>
            </Form>
        </Modal>
    )
}

export default FormPlayer;