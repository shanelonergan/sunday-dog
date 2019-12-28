import React from 'react';
import { Box, Grommet, ResponsiveContext, Heading, Stack, Image } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import Sunday from './img/sunday-with-ball.jpg'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Grommet>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Box overflow='hidden'
                            height='auto'
                            width='auto'
                            overflow='auto'

                            >
                                <Stack fill >
                                    <Image src={Sunday} />
                                    <Heading alignSelf='center' color='blue'>{'Sunday Dog'}</Heading>
                                </Stack>
                            </Box>
                        )}
                    </ResponsiveContext.Consumer>
                </Grommet>
            </header>
        </div>
    );
}

export default App;
