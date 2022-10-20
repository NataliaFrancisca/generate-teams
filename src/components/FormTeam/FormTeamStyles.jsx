import styled from "styled-components"

export const InputSpinner_styles = styled.form`
    width: max-content;
    padding: 10px;

    background-color: #F9F2ED;
    box-shadow: 0px 0px 6px #c5bfba;

    border-radius: 10px;

    display: flex;
    align-items: center;
    align-self: flex-end;
    justify-content: space-around;

    font-family: var(--title);

    position: absolute;
    top: 10px;

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