import { PersonModel } from "src/person/src/models/PersonModel"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('person_auth')
export class AuthModel {

    @PrimaryGeneratedColumn({ name: 'code' })
    code?: number

    @Column({ name: 'password' })
    password: string

    @OneToOne(() => PersonModel)
    @JoinColumn({ name: 'code' })
    person?: PersonModel

}