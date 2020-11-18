import styled from 'styled-components';

export const LapContainer = styled.div`
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
        padding: .8rem .5rem;
        margin: .8rem 0;

        display: flex;
        justify-content: space-between;

        font-size: 1.4rem;
        border-bottom: 1px solid gray;
        cursor: pointer;

        animation: fade-top 1s backwards;

        transition: .2s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.050);
        }
    }
`;

export const LapIndex = styled.div`
    span {
        font-size: 1rem;
        vertical-align: top;
    }
`;
