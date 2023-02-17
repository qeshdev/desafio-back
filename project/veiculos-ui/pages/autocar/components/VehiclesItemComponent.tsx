import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from 'react'
import styles from '../../../styles/main.module.css'
import { CarPropertyProps } from '../interfaces/props/CarPropertyProps'

export default class VehiclesItemComponent extends Component<CarPropertyProps> {


    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    render(): ReactNode {
        return (

            <div className={'col-lg-6'}>
                <div className={`card ${styles.card}`}>
                    <img alt={`${this.props.vehicleName}`} className={styles['card-img-top']} src={`${this.props.vehicleImagem}`} />
                    <div className='card-body'>
                        <h5 className={'card-title'}>{this.props.vehicleName}</h5>
                        <p className='card-text' />
                        <strong>Valor:</strong>{this.props.value}
                        <div className='d-grid gap-2'>
                            <a className={`${'btn'} ${styles['btn-contact']}`}
                                href={`https://api.whatsapp.com/send?phone=55${this.props.phone}&text=Olá gostaria de informações sobre o imóvel: ${this.props.name}`}
                                target={'_blank'}>Contato Proprietário</a>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}