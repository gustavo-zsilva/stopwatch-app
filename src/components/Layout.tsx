import React from 'react';

import { Container } from '../styles/components/Layout';

import Clock from './Clock';
import LapContainer from './LapContainer';
import Controls from './Controls';

function Layout() {
    return (
        <Container>
            <Clock />
            <LapContainer />
            <Controls />
        </Container>
    );
}

export default Layout;