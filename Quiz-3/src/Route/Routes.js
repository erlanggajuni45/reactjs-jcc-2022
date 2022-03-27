import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/navbar'
import Body from '../components/body'
import Footer from '../components/footer'
import Home from '../home/home'
import About from '../about/about'
import { GlobalProvider } from '../context/GlobalContext'
import GameList from '../game/gameList'
import GameForm from '../game/gameForm'
import Search from '../search/search'

const Routes = () => {
    return(
        <>
        <Router>
            <GlobalProvider>
            <Navbar />
            <Body>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/mobile-list">
                        <GameList />
                    </Route>

                    <Route exact path="/mobile-form">
                        <GameForm />
                    </Route>

                    <Route exact path="/mobile-form/edit/:Id">
                        <GameForm />
                    </Route>

                    <Route exact path="/search/:valueOfSearch">
                        <Search />
                    </Route>
                    <Route exact path="/about">
                    <About />
                    </Route>
                </Switch>
            </Body>
            <Footer />
            </GlobalProvider>
        </Router>
        </>
    )
}

export default Routes