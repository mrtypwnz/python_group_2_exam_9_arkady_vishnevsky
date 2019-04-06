import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import Register from "./containers/Register/Register";
import Layout from "./components/Layout/Layout";
import ProductList from "./containers/ProductList/ProductList";
import ProductDetail from "./containers/ProductDetail/ProductDetail"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path='/register/' component={Register}/>
                        <Route path="/products/:id" component={ProductDetail}/>
                        <Route path='/' component={ProductList} exact/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
