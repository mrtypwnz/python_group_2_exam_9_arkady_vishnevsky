import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import Login from "./Containers/Login/Login";
import Logout from "./Containers/Logout/Logout";
import Register from "./Containers/Register/Register";
import Layout from "./Components/Layout/Layout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path='/register/' component={Register}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
