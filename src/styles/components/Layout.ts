import styled from 'styled-components';

export const Container = styled.div`
    margin: 25vh auto;
    justify-content: center;
    max-width: 80rem;

    display: grid;

    grid-template-columns: calc(336px + 2rem) 20rem;
    grid-template-rows: 14rem 7rem;
    grid-template-areas:
        'Clock LapContainer'
        'Clock Controls';

    gap: 2rem;
`;