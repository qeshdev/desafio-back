import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('address')
export class AddressModel {

    @PrimaryGeneratedColumn()
    code?: number

    @Column({ type: 'varchar' })
    cep: string

    @Column({ type: 'varchar' })
    logradouro: string

    @Column({ type: 'varchar' })
    bairro: string

    @Column({ type: 'varchar' })
    localidade: string

    @Column({ type: 'varchar' })
    uf: string
}