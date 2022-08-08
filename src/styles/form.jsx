import styled from "styled-components";

export const Form = styled.form`
    margin: 10px 0;
`
export const FormButton = styled.button`
    width: 100%;
    border-radius: 4px;

    margin-top: 15px;
    padding: 15px 10px;

    font-size: 1em;
    font-weight: 700;
    font-family: var(--title);
    letter-spacing: 2px;

    background-color: #C4DFAA;
    cursor: pointer;
    transition: filter .6s ease-in-out;

    &:hover{
        filter: brightness(80%);
    }
`

export const GroupLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;

    & label {
        font-size: 1.2em;
        font-weight: 600;
        margin: 5px 0;
    }

    & input {
        padding: 10px 8px;
        font-size: 1.2em;
        border-radius: 3px;
        border: solid var(--colorBlack) 1.5px;
    }

    & span{
        font-weight: 600;
        color: #EB4747;
        letter-spacing: 1px;
    }
`

export const FormTeams = styled.form`
    display: flex;
    justify-content: space-around;
    align-self: flex-start;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    border: solid black 2px;
    margin: 10px 0;

    & label{
        font-weight: 600;
        font-size: 1.2em
    }

    @media screen and (max-width: 500px){
        flex-direction: column;
    }
`

export const InputSpinner = styled.div`
    width: max-content;
    padding: 10px;
    margin-left: 30px;

    background-color: #F9F2ED;
    box-shadow: 0px 0px 6px #c5bfba;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-family: var(--title);

    @media screen and (max-width: 500px){
        width: 100%;
        margin-left: 0px;
        margin: 10px 0;
    }

    & span, button{
        font-size: 1.5em;
        padding: 5px 18px;
        font-weight: 600;
    }

    & button{
        border-radius: 5px;
        background-color: #C4DFAA;
        cursor: pointer;
        transition: filter .4s ease-in-out;

        &:hover{
            filter: brightness(80%);
        }

        @media screen and (max-width: 500px){
            width: 100%;
        }   
    }

    & button:first-child{
        margin-right: 5px;
    }

    & button:last-child{
        margin-left: 5px;
    }
` 