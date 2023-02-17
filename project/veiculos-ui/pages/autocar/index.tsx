import { Component, ReactNode } from 'react'
import styles from '../../styles/main.module.css'
import ItemCar from './components/ItemCar'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../common/components/k'


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
                <Header/>
                <div className='row'>

                    <ItemCar phone='31985239490' nome='norberto' value={150} vehicleName='Palio' vehicleImagem='https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202301/20230123/fiat-palio-1.0-mpi-fire-economy-8v-flex-4p-manual-wmimagem12094446716.jpg?s=fill&w=420&h=300&q=75'></ItemCar>
                    <ItemCar phone='31985239490' nome='norberto' value={150} vehicleName='Palio' vehicleImagem='https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202301/20230123/fiat-palio-1.0-mpi-fire-economy-8v-flex-4p-manual-wmimagem12094446716.jpg?s=fill&w=420&h=300&q=75'></ItemCar>
                    <ItemCar phone='31985239490' nome='norberto' value={150} vehicleName='Palio' vehicleImagem='https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202301/20230123/fiat-palio-1.0-mpi-fire-economy-8v-flex-4p-manual-wmimagem12094446716.jpg?s=fill&w=420&h=300&q=75'></ItemCar>
                </div>

            </div>
        )
    }

}