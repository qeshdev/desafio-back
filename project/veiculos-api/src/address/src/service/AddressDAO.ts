import { EntityRepository, Repository } from "typeorm"
import { AddressModel } from "../model/AddressModel"

@EntityRepository(AddressModel)
export class AddressDAO extends Repository<AddressModel>{ }