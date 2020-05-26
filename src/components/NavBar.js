import React from "react"


let NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
                <a className="navbar-brand logoEscrito" href="#">
                    <img id="logoNavBar" src={require('./imagens/IconeMelhor2.png')} className="d-inline-block align-top" alt=""></img>
                    Bebometro</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sobre">Sobre</a>
                        </li>
                        <li className="nav-item ditreita">
                            <a className="nav-link" href="#download">Download</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>

        </div>
    )
}

export default NavBar