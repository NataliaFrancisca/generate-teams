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

export const FormTeamStyled = styled.form`
    border-radius: 4px;
    display: flex;
    align-self: center;
    align-items: center;
    width: 50%;
    background-color: #FFFFFF;
    padding: 15px 20px;
    justify-content: space-between;

    margin: 10px 0;

    @media screen and (max-width: 800px){
        width: 80%;
    }

    @media screen and (max-width: 500px){
        width: 100%;
        flex-direction: column;
    }

    & input{
        width: 60%;
        padding: 10px 8px;
        font-size: 1.1em;
        border-radius: 3px;
        background-color: transparent;
        outline: none;

        @media screen and (max-width: 500px){
            width: 100%;
        }   
    }

    input[type='number'] {
        -moz-appearance:textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    & button{
        border-radius: 5px;
        padding: 10px 8px;
        width: auto;
        font-size: 1em;
        font-family: var(--title);

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
`