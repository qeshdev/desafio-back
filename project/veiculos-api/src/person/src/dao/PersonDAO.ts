import { PersonModel } from "src/person/src/models/PersonModel"
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(PersonModel)
export class PersonDAO extends Repository<PersonModel>{ }