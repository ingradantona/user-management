import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1712973273927 implements MigrationInterface {
    name = 'UserTable1712973273927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("user_id" SERIAL NOT NULL, "user_name" character varying NOT NULL, "user_surname" character varying NOT NULL, "user_email" character varying NOT NULL, "user_password" character varying NOT NULL, "user_status" bit NOT NULL, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
