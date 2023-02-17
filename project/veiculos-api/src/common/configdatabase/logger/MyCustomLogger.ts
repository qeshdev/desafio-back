import { Logger, QueryRunner } from "typeorm"

export class MyCustomLogger implements Logger {

    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
        const requestUrl = queryRunner && queryRunner.data["request"] ? "(" + queryRunner.data["request"].url + ") " : ""
        console.log(`\n\x1b[34mSQL:\n\x1b[37m${query}\n`)
        console.log(`\x1b[34mPARAMETERS:[${parameters}]`)
    }

    logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner) {
        console.clear()
    }

    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
        console.clear()
    }

    logSchemaBuild(message: string, queryRunner?: QueryRunner) {
        console.clear()
    }


    logMigration(message: string, queryRunner?: QueryRunner) {
        console.clear()
    }

    log(level: "log" | "info" | "warn", message: any, queryRunner?: QueryRunner) {
        console.log(message)
    }

}