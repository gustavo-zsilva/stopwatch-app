import React, { useState, useEffect } from 'react';

import { Container } from '../styles/components/Layout';
import { Controls } from '../styles/components/Controls';
import { Clock, ClockContainer } from '../styles/components/Clock';

import LapContainer from './LapContainer';

interface TimeProps {
    hours: number;
    minutes: number;
    seconds: number;
    milisseconds: number;
}

function Layout() {
    const [time, setTime] = useState<TimeProps>({hours: 0, minutes: 0, seconds: 0, milisseconds: 0});
    
    const [isTimerOn, setIsTimerOn] = useState(false);
    
    function updateCounter() {

        if (time.milisseconds >= 100) {
            const seconds = time.seconds + 1;

            setTime({ ...time, seconds, milisseconds: 0 })

            if (time.seconds >= 60) {
                const minutes = time.minutes + 1;
    
                setTime({ ...time, minutes, seconds: 0 })

                if (time.minutes >= 60) {
                
                    setTime({ ...time, hours: + 1, minutes: 0 })
                }
            
            }
        }

        const milisseconds = time.milisseconds++;
    
        setTime({ ...time, milisseconds })
        
    }

    function resetTimer() {
        setTime({ hours: 0, minutes: 0, seconds: 0, milisseconds: 0 });
    }
    
    useEffect(() => {
        if (!isTimerOn) { return; }

        const id = setInterval(updateCounter, 10);
        return () => clearInterval(id);
    }, [isTimerOn])

    return (
        <Container>
            <Clock>
                <ClockContainer>
                    <p>{time.hours}:{time.minutes}:{time.seconds}:{time.milisseconds}</p>

                </ClockContainer>
            
            </Clock>

            <LapContainer />

            <Controls>
                <div>
                    <button type="button" onClick={() => setIsTimerOn(true)}>Start</button>
                    <button type="button" onClick={() => setIsTimerOn(false)}>Stop</button>
                </div>
                <div>
                    <button type="button" onClick={resetTimer}>Reset</button>
                    <button type="button">Lap</button>
                </div>
            </Controls>

        </Container>
    );
}

export default Layout;