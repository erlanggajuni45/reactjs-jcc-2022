import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../Component/navbar';
import { SwitchColorProvider } from '../context/SwitchColor';
import Tugas10 from '../Tugas-10/tugas10';
import Tugas11 from '../Tugas-11/tugas11';
import Tugas12 from '../Tugas-12/tugas12';
import Tugas13 from '../Tugas-13/tugas13';
import { Tugas13Provider } from '../Tugas-13/tugas13Context';
import Tugas14Form from '../Tugas-14/tugas14Form';
import Tugas14Table from '../Tugas-14/tugas14Table';

const Routes = () => {
    return(
        <>
            <Router>
            <Tugas13Provider>
            <SwitchColorProvider>
            <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Tugas10 />
                    </Route>

                    <Route exact path="/tugas11">
                        <Tugas11 />
                    </Route>

                    <Route exact path="/tugas12">
                        <Tugas12 />
                    </Route>

                    <Route exact path="/tugas13">
                        <Tugas13 />
                    </Route>
                    
                    <Route exact path="/tugas14">
                        <Tugas14Table />
                    </Route>

                    <Route exact path="/tugas14/create">
                        <Tugas14Form />
                    </Route>

                    <Route exact path="/tugas14/edit/:slug">
                        <Tugas14Form />
                    </Route>
                </Switch>
                
                </SwitchColorProvider>
            </Tugas13Provider>

            </Router>
        </>
    )
}

export default Routes