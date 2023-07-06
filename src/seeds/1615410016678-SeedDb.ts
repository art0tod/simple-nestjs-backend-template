/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1615410016678 implements MigrationInterface {
  name = 'SeedDb1615410016678';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('keys'), ('nest')`,
    );

    // password is test
    await queryRunner.query(
      `INSERT INTO users (username, email, password) 
      VALUES ('test1', 'test1@testmail.com', '$2b$10$cAYVD6YcsbxFACaX635VReyh/kJNMd5Y8pkWQYShs.1mMY.RTvLL.')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article description', 'first article body', 'dragonst,nest', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'Second article description', 'second article body', 'dragons,nest', 1)`,
    );
  }

  public async down(): Promise<void> {
    return;
  }
}
