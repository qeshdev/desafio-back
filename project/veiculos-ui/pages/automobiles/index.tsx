import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from 'react'
import styles from '../../styles/main.module.css'
import Header from '../common/components/layout/components/Header'
import MenuCar from '../common/components/layout/components/Menu'


export default class Home extends Component{


    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    async componentDidMount() {
        this.setState({
            //data: await HomeHttpUtil.getListItem(),
        })
    }



    render(): ReactNode {      
        return (
            <div style={{ width: '100%', height: '100%' }}>            
                <main className={`${styles['l-box-main']}`}>                   
                    <MenuCar></MenuCar>
                </main>
            </div>
        )
    }

}