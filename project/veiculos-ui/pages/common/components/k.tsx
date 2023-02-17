import { Component, ReactNode } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../../styles/main.module.css'

export default class Header extends Component {


    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    render(): ReactNode {
        return (

            <header className="container-fluid fixed-top l-box-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand c-text-menu" href="index.html">@AutoCar</a>
                        <button className="nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active c-text-menu" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link c-text-menu" href="login.html">Cadastre seu imovel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <img src="imgs/logo.png" className="logo"/>
            </header>

        )
    }

}