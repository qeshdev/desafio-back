import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from 'react'
import styles from '../../styles/main.module.css'
import Header from '../common/components/Header'
import VehiclesItemComponent from './components/VehiclesItemComponent'


export default class Home extends Component {


    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    render(): ReactNode {
        return (
            <div className={`container ${styles['l-main-data']}`}>
                <Header />
                <div className='row'>
                    <div className='col-12'>
                        <h2><span> </span> Carros</h2>
                    </div>
                </div>
                <div className='row'>

                    <VehiclesItemComponent phone='31985239490' nome='norberto' value={150} vehicleName='Palio' vehicleImagem='https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202301/20230123/fiat-palio-1.0-mpi-fire-economy-8v-flex-4p-manual-wmimagem12094446716.jpg?s=fill&w=420&h=300&q=75'></VehiclesItemComponent>
                    <VehiclesItemComponent phone='31985239490' nome='norberto' value={150} vehicleName='Palio' vehicleImagem='https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202301/20230123/fiat-palio-1.0-mpi-fire-economy-8v-flex-4p-manual-wmimagem12094446716.jpg?s=fill&w=420&h=300&q=75'></VehiclesItemComponent>
                    <VehiclesItemComponent phone='31985239490' nome='norberto' value={150} vehicleName='Palio' vehicleImagem='https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202301/20230123/fiat-palio-1.0-mpi-fire-economy-8v-flex-4p-manual-wmimagem12094446716.jpg?s=fill&w=420&h=300&q=75'></VehiclesItemComponent>
                </div>

            </div>
        )
    }

}