import styled from 'styled-components';

export const Container = styled.div`
    grid-area: LapContainer;

    /* border-bottom: 1px solid black; */
    overflow: auto;

    ::-webkit-scrollbar {
        width: 6px;
    }


    ::-webkit-scrollbar-track {
        background-color: #CCCCCC;
    }

    ::-webkit-scrollbar-thumb {
        background: #4D4D4D;
    }

    ::-webkit-scrollbar-thumb:hover {
        width: 8px;
    }

    ::-webkit-scrollbar-corner {
        border-radius: 50%;
    }
`;

export const LapList = styled.ul`
    list-style-type: none;

    li {
        padding: .5rem;
    }
`;
