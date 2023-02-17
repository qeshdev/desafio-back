import { Module } from '@nestjs/common'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressController } from 'src/address/AddressController'
import { AddressDAO } from 'src/address/src/service/AddressDAO'
import { AddressManager } from 'src/address/src/service/AddressManager'
import { AuthController } from 'src/auth/src/AuthController'
import { AuthDAO } from 'src/auth/src/dao/AuthDAO'
import { AuthManager } from 'src/auth/src/services/AuthManager'
import { jwtConstants } from 'src/auth/src/services/constants'
import { JwtStrategy } from 'src/auth/src/services/JwtStrategy'
import { LocalStrategy } from 'src/auth/src/services/LocalStrategy'
import { Database } from 'src/common/configdatabase/DatabaseConnectionOptions'
import { AppController } from 'src/main/app.controller'
import { PersonController } from 'src/person/PersonController'
import { PersonDAO } from 'src/person/src/dao/PersonDAO'
import { PersonManager } from 'src/person/src/services/PersonManager'
import { CategoryController } from 'src/product/CategoryController'
import { ProductController } from 'src/product/ProductController'
import { CategoryDAO } from 'src/product/src/service/CategoryDAO'
import { CategoryManager } from 'src/product/src/service/CategoryManager'
import { ProductDAO } from 'src/product/src/service/ProductDAO'
import { ProductManager } from 'src/product/src/service/ProductManager'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { AppService } from './app.service'

@Module({
    imports: [
        TypeOrmModule.forRoot({ ...Database.getConnectionOptions<PostgresConnectionOptions>(), }),
        TypeOrmModule.forFeature([]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: process.env.EXPIRESIN },
        }),
    ],
    controllers: [PersonController, AppController, AuthController, AddressController, ProductController, CategoryController, AuthController],
    providers: [PersonDAO, AddressDAO, ProductDAO, CategoryDAO, AuthDAO, PersonManager, AuthManager, AppService, AddressManager, ProductManager, AuthManager, CategoryManager, JwtService, LocalStrategy, JwtStrategy],
})
export class AppModule { }

