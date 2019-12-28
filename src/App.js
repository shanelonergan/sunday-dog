import React from 'react';
import {
    Box,
    Grommet,
    ResponsiveContext,
    Heading,
    Stack,
    Image
} from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { ParallaxBanner } from 'react-scroll-parallax';
import Sunday from './img/sunday-with-ball.jpg';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>Sunday</header>
            {/* <Grommet> */}
                <ParallaxBanner
                    className='your-class'
                    layers={[
                        {
                            image: Sunday,
                            amount: 0.1
                        },
                        {
                            image: 'https://foo.com/bar.png',
                            amount: 0.2
                        }
                    ]}
                    style={{
                        height: '500px'
                    }}
                >
                    <h1>Banner Children</h1>
                </ParallaxBanner>
            {/* </Grommet> */}
        </div>
    );
}

export default App;
