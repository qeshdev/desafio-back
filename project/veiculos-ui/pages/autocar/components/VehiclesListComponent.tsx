import { Component, ReactNode } from "react"
import { VehiclesListProps } from "../interfaces/props/VehiclesListProps"
import VehiclesItemComponent from "./VehiclesItemComponent"

export default class VehiclesListComponent extends Component<VehiclesListProps> {
    constructor(props: any) {
        super(props)

        this.state = {
            data: null,
        }
    }

    render(): ReactNode {
        return (

            <>
                <div className='row'>
                    <div className='col-12'>
                        <h2><span> </span>{this.props.categoryName}</h2>
                    </div>
                </div>
                <div className='row'>

                    {
                        this.props.vehicles.map(item => <VehiclesItemComponent phone={item.name} name={item.name} value={item.value} vehicleName={item.name} vehicleImagem={item.image} ></VehiclesItemComponent>)
                    }
                </div>
            </>
        )
    }
}
