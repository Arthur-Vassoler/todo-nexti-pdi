import styled from "styled-components";

export const Container = styled.li`
    box-sizing: border-box;
    margin: 1rem auto;
    max-width: 900px;
    width: 95%;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid rgba(0,0,0,.5);
    border-radius: .5rem;
    flex-direction: column;
    justify-content:initial;
    position: relative;
    text-align:center;

    input{
        width:20px;
        height:20px;
        margin-left: 0;
    }


    label{
        margin: .5rem auto;
        text-align: center;
        word-break: break-word;
    }

    label.checked{
        text-decoration: line-through;
    }

    // aditional styled button component
    button{
        width:100%;
        padding: .5rem 1rem;
        margin-top: .5rem;

    }

    @media (min-width:980px){
        flex-direction: row;

        input{
            width:15px;
        height:15px;
        }

        label{
            width: 75%;
            margin: 0;
            margin-left: .5rem;
            text-align: justify;
        }

        button{
            width: initial;
            position: absolute;
            right:2%;
            margin-top: 0;
        }
    }
`