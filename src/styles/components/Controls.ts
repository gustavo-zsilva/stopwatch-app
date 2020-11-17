import styled from 'styled-components';

export const Controls = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: Controls;

    button {
        padding: 1rem;
        justify-content: center;
        border: 1px solid gray;
        background-color: white;

        cursor: pointer;
    }

    div:first-child {
        button:first-child {
            border-radius: .5rem 0 0 .5rem;
            width: 50%;
            border-right: 0;
        }
        button:last-child {
            border-radius: 0 .5rem .5rem 0;
            width: 50%;
        }
    }

    div:last-child {
        margin-top: 1rem;

        button {
            width: 100%;
            border-radius: .5rem;
            margin-bottom: 1rem;
        }
    }

`;
