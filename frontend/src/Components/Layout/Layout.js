import React, {Fragment} from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = (props) => {
    return <Fragment>
        <header>
            <Navbar/>
        </header>
        <main className="container">
            <div className="row">
                <div className="col col-12">{props.children}</div>
            </div>
        </main>
    </Fragment>
};


export default Layout;