import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePendingEmailTable1787474348630 implements MigrationInterface {
    name = 'CreateTablePendingEmailTable1787474348630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "PENDING_EMAIL" ("id" SERIAL NOT NULL, "payload" character varying NOT NULL, "isPending" boolean NOT NULL, "subject" character varying NOT NULL, "to" character varying NOT NULL, CONSTRAINT "PK_01db8dd94ef7914d695da10f2c9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "PENDING_EMAIL"`);
    }

}
