import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from 'react'
import Header from '../../common/components/Header'


export default class Home extends Component {


    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    render(): ReactNode {
        return (
            <div className={'container'}>
               <Header></Header>
            </div>
        )
    }

}