import React, { useState, useEffect } from 'react';

import { Container } from '../styles/components/Layout';
import { Controls } from '../styles/components/Controls';
import { Clock, ClockContainer } from '../styles/components/Clock';
import { LapContainer, LapList, LapIndex } from '../styles/components/LapContainer';

interface Lap {
    key: number;
    time: string;
}

function Layout() {
    const [isTimerOn, setIsTimerOn] = useState(false);
    const [timer, setTimer] = useState(0);
    const [laps, setLaps] = useState<Lap[]>([]);

    function resetTimer() {
        setIsTimerOn(false);
        setTimer(0);
    }

    function addLap() {
        const newLap = formatTime();
        const key = new Date().getTime();

        setLaps([...laps, { key, time: newLap }]);
    }

    function removeLap(key: number) {
        console.log('removed lap');
        const newLaps = laps.filter(lap => lap.key !== key);

        setLaps(newLaps);
    }

    function formatTime() {
        // A função slice(-2) retorna os dois últimos dígitos de uma string.

        // const getMilisseconds = `0${Math.floor((timer % 100))}`.slice(-2)
        const getMilisseconds = `0${(timer % 100)}`.slice(-2);
        const minutes = Math.floor(timer / 100);
        const getSeconds = `0${minutes % 60}`.slice(-2);
        const getMinutes = `0${Math.floor(timer / 6000)}`.slice(-2);

        return `${getMinutes}:${getSeconds}:${getMilisseconds}`;
    }

    function calcGain(lap: Lap) {
        const currentLap = laps[laps.indexOf(lap)].time;
        const currentLapValues = currentLap.split(':').map(time => Number(time));

        const previousLap = laps[laps.indexOf(lap)].time;
        const previousLapValues = previousLap.split(':').map(time => Number(time));

        const arrayDifference: number[] = [];
        
        currentLapValues.forEach((value, index) => {
            // arrayDifference.push(currentLapValues[index] - previousLapValues[index])
            // console.log(currentLapValues[index] - previousLapValues[index]);
            
            
        })
        
        // console.log(arrayDifference.join(':'))
        
    }
    
    useEffect(() => {
        if (!isTimerOn) { return }

        const id = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 10);

        return () => clearInterval(id);
    }, [isTimerOn])

    return (
        <Container>
            <Clock>
                <ClockContainer>
                    <p>{formatTime()}</p>
                </ClockContainer>
            
            </Clock>

            <LapContainer>
                <LapList>
                    {
                        laps.map(lap => {
                            return <li key={lap.key} onDoubleClick={() => removeLap(lap.key)}>
                                <LapIndex>
                                    Lap
                                    <span>
                                        {laps.indexOf(lap) + 1}
                                    </span>
                                </LapIndex>
                                {lap.time}
                                {calcGain(lap)}
                            </li>
                        })
                    }
                </LapList>
            </LapContainer>

            <Controls>
                <div>
                    <button type="button" onClick={() => setIsTimerOn(true)}>Start</button>
                    <button type="button" onClick={() => setIsTimerOn(false)}>Stop</button>
                </div>
                <div>
                    <button type="button" onClick={resetTimer}>Reset</button>
                    <button type="button" onClick={addLap}>Lap</button>
                </div>
            </Controls>

        </Container>
    );
}

export default Layout;