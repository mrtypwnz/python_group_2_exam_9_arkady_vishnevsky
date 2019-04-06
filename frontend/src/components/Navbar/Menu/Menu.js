import React, {Fragment, Component} from 'react';
import MenuItem from "./MenuItem/MenuItem";

class Menu extends Component {

    state = {
        collapse: true
    };

    toggle = () => {
        this.setState({collapse: !this.state.collapse});
    };

    render() {
        const username = localStorage.getItem('username');
        return <Fragment>
            <button onClick={this.toggle} className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={(this.state.collapse ? "collapse" : "") + " navbar-collapse"}
                 id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <MenuItem to="/">Главная</MenuItem>
                </ul>

                <ul className="navbar-nav ml-auto">
                {username ? [
                    <li className="nav-item" key="username"><span className="navbar-text">Привет, {username}!</span></li>,
                    <MenuItem to="/logout" key="logout">Выйти</MenuItem>
                ] : [
                    <MenuItem to="/login" key="login">Войти</MenuItem>,
                    <MenuItem to="/register" key="register">Зарегистрироваться</MenuItem>
                ]}
            </ul>



            </div>
        </Fragment>
    }
}

export default Menu;