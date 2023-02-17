import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './main/app.module'
const cors = require('cors')

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true })

    app.useGlobalPipes(new ValidationPipe({
        forbidNonWhitelisted: true,
        whitelist: true,
        transform: true
    }))

    cors({
        origin:'*',
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        preflightContinue: false,
        optionsSuccessStatus: 204
    })

    app.useGlobalInterceptors()

    await app.listen(process.env.PORT || 3001)
}
bootstrap()