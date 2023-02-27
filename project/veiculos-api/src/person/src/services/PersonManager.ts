import { BadRequestException, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import * as bcrypt from 'bcrypt'
import { PersonDAO } from "src/person/src/dao/PersonDAO"
import { PersonRequestDTO } from "src/person/src/dtos/request/PersonRequestDTO"
import { PersonModel } from "src/person/src/models/PersonModel"

@Injectable()
export class PersonManager {

    constructor(
        @InjectRepository(PersonDAO) private readonly _personDAO: PersonDAO
    ) { }

    async save(dto: PersonRequestDTO): Promise<PersonModel> {

        const getPersonEmail: PersonModel = await this._personDAO.findOne({ where: { email: dto.email } })

        if (getPersonEmail)
            throw new BadRequestException(`O endereço de email ${dto.email} já está em uso.`)

        const getPersonPhone: PersonModel = await this._personDAO.findOne({ where: { phone: dto.phone } })

        if (getPersonPhone)
            throw new BadRequestException(`O telefone ${dto.phone} já está em uso.`)

        const getPersonCPF: PersonModel = await this._personDAO.findOne({ where: { cpf: dto.cpf } })

        if (getPersonCPF)
            throw new BadRequestException(`O cpf ${dto.cpf} já está em uso.`)

        const getPersonCNPJ: PersonModel = await this._personDAO.findOne({ where: { cnpj: dto.cnpj } })

        if (getPersonCNPJ)
            throw new BadRequestException(`O cpf ${dto.cnpj} já está em uso.`)


        const personSaveModel: PersonModel = {
            name: dto.name,
            email: dto.email,
            phone: dto.phone,
            cnpj: dto.cnpj,
            cpf: dto.cpf,
            auth: {
                password: await bcrypt.hash(dto.password, Number(process.env.SALTORROUNDS))
            }
        }

        const personSaved: PersonModel = await this._personDAO.save(personSaveModel)     

        return this._personDAO.findOne(personSaved.code)
    }

    async findOne(code: number) {
        return await this._personDAO.findOne(code)
    }

}