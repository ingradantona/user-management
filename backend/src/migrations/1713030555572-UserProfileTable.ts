import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class UserProfileTable1713030555572 implements MigrationInterface {
  name = 'UserProfileTable1713030555572';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "profile" ("profile_id" SERIAL NOT NULL, "profile_name" character varying NOT NULL, CONSTRAINT "PK_b0465dda30314a8786db3354a65" PRIMARY KEY ("profile_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("user_id" SERIAL NOT NULL, "user_name" character varying NOT NULL, "user_surname" character varying NOT NULL, "user_email" character varying NOT NULL, "user_password" character varying NOT NULL, "user_status" boolean NOT NULL, "profile_id" integer NOT NULL, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_f44d0cd18cfd80b0fed7806c3b7" FOREIGN KEY ("profile_id") REFERENCES "profile"("profile_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    await queryRunner.query(`INSERT INTO "profile" ("profile_name") VALUES ('Administrador')`);
    await queryRunner.query(`INSERT INTO "profile" ("profile_name") VALUES ('Analista')`);

    const adminPassword = await bcrypt.hash('admin@2024', 10);
    await queryRunner.query(`
          INSERT INTO "user" ("user_name","user_surname", "user_email", "user_password", "user_status", "profile_id")
          VALUES ('ADMIN','ADMIN', 'admin@gmail.com', '${adminPassword}', TRUE, 1)
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_f44d0cd18cfd80b0fed7806c3b7"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "profile"`);
  }
}
