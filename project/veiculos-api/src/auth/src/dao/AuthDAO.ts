import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm"
import { AuthModel } from "../models/AuthModel"

@EntityRepository(AuthModel)
export class AuthDAO extends Repository<AuthModel> {

    async getByUsername(username: string) {

        const query = await this._createQueryBuilder()

        query.leftJoinAndSelect('auth.person', 'person')

        query.where('person.email =:username', { username })

        return query.getOne()
    }

    private async _createQueryBuilder(): Promise<SelectQueryBuilder<AuthModel>> {
        return this.createQueryBuilder()
            .select("auth")
            .from(AuthModel, "auth")
    }

}