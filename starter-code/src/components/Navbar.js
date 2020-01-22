import React from 'react'
import CoolButton from './CoolButton.js'

const navbar = () => {
    return (
        <nav className="navbar is-transparent has-background-light">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">Home</a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <CoolButton className="button is-rounded my-class is-danger is-small margin" value="Login"></CoolButton>
                            <CoolButton className="button is-small is-success margin" value="Signup"></CoolButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default navbar