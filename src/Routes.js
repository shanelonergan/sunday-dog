import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomeContainer} />
        </Switch>
    )
}
