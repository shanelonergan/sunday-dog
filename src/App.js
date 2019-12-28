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
                            <Box overflow='hidden' justify='center' width='100vw' height='100vh'>
                                <Stack>
                                    <Heading alignSelf='center' color='blue'>{'Sunday Dog'}</Heading>
                                    <Image src={Sunday}>
                                    </Image>
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
