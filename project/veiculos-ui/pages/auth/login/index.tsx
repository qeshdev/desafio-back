import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from 'react'


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
                <p>login</p>
            </div>
        )
    }

}