import React from 'react';

import { Container } from '../styles/components/Controls';

function Controls() {
    return (
        <Container>
            <div>
                <button type="button">Start</button>
                <button type="button">Stop</button>
            </div>
            <div>
                <button type="button">Reset</button>
            </div>
        </Container>
    );
}

export default Controls;