import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from 'react'
import styles from '../../styles/main.module.css'
import Header from '../common/components/layout/components/Header'
import VehiclesListComponent from './components/VehiclesListComponent'
import { HomeProps } from './interfaces/props/HomeProps'
import { HomeState } from './interfaces/state/HomeState'
import HomeHttpUtil from './manager/utils/HomeHttpUtil'


export default class Home extends Component<HomeProps, HomeState> {


    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    async componentDidMount() {
        this.setState({
            data: await HomeHttpUtil.getListItem(),
        })
    }



    render(): ReactNode {      
        return (
            <div className={`container ${styles['l-main-data']}`}>
                <Header />
                {this.state?.data?.map((item => <VehiclesListComponent categoryName={item.category} vehicles={item.vehicle}></VehiclesListComponent>))}
            
            </div>
        )
    }

}