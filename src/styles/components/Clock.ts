import styled from 'styled-components';

export const Clock = styled.div`
  grid-area: Clock;
`;

export const ClockContainer = styled.div`
    display: flex;

    margin: auto;
    width: 100%;
    height: 100%;
    border: 2px solid gray;
    border-radius: 50%;
    
    align-items: center;
    justify-content: center;

    p {
        padding: 1rem;
        border: 2px solid gray;
        border-radius: 2rem;
        font-size: 4rem;
    }
`;
