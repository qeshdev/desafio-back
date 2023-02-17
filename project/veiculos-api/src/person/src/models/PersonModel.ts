import { AuthModel } from "src/auth/src/models/AuthModel"
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('person')
export class PersonModel {

    @PrimaryGeneratedColumn({ name: 'code' })
    code?: number

    @Column({ name: 'cpf' })
    cpf: string

    @Column({ name: 'cnpj' })
    cnpj: string

    @Column({ name: 'name' })
    name: string

    @Column({ name: 'email' })
    email: string

    @Column({ name: 'phone' })
    phone: string

    @OneToOne(() => AuthModel, { cascade: true })    
    auth?: AuthModel

}