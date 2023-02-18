import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script'
import { Component, ReactNode } from 'react'
import styles from '../../../../../styles/main.module.css'
import { LayoutEnum } from '../../enum/LayoutEnum'

export default class Header extends Component {


    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    getLayout(layout: LayoutEnum) {

        switch (layout) {

            case LayoutEnum.AUTOCAR:
                return window.location.assign(LayoutEnum.AUTOCAR)

            case LayoutEnum.AUTH_LOGIN:
                return window.location.assign(LayoutEnum.AUTH_LOGIN)
        }

    }

    render(): ReactNode {
        return (
            <>
                <header className={`container-fluid fixed-top ${styles['l-box-header']}`}>
                    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
                        <div className={`container-fluid ${styles['l-box-nav']}`}>
                            <a className={`navbar-brand ${styles['c-text-menu']}`} onClick={()=>this.getLayout(LayoutEnum.AUTOCAR)}>@AutoCar</a>
                            <button className={`${styles['nav-btn']}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className={`nav-link active ${styles['c-text-menu']}`} aria-current="page" onClick={()=>this.getLayout(LayoutEnum.AUTOCAR)}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${styles['c-text-menu']}`} onClick={()=>this.getLayout(LayoutEnum.AUTH_LOGIN)}>Cadastre seu automóvel</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous"
                />
            </>

        )
    }

}