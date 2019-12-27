import React from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { grommet, dark } from 'grommet/themes';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Grommet>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Box fill background='brand'>
                                <Heading>{`Sunday Dog`}</Heading>
                            </Box>
                        )}
                    </ResponsiveContext.Consumer>
                </Grommet>
            </header>
        </div>
    );
}

export default App;
