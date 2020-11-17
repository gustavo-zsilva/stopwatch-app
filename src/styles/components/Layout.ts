import styled from 'styled-components';

export const Container = styled.div`
    margin: 25vh auto;
    justify-content: center;
    max-width: 80rem;

    display: grid;

    grid-template-columns: 432px 20rem;
    grid-template-rows: 14rem 11rem;
    grid-template-areas:
        'Clock LapContainer'
        'Clock Controls';

    gap: 2rem;
`;

