import React from 'react';
import { Box, Grommet, ResponsiveContext, Heading } from 'grommet';
import { grommet, dark } from 'grommet/themes';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Grommet>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Box overflow='hidden' justify='center' width='100vw' height='100vh' background="url(https://cdn.royalcanin-weshare-online.io/GvqPH2YBIYfdNSoCoAgj/v1/bd18bl-bernese-mountain-dog-adult-standing)">
                                <Heading alignSelf='center' color='white'>{'Sunday Dog'}</Heading>
                            </Box>
                        )}
                    </ResponsiveContext.Consumer>
                </Grommet>
            </header>
        </div>
    );
}

export default App;
