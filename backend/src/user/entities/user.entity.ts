import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ nullable: false, type: 'varchar' })
  user_name: string;

  @Column({ nullable: false, type: 'varchar' })
  user_surname: string;

  @Column({ nullable: false, type: 'varchar' })
  user_email: string;

  @Column({ nullable: false, type: 'varchar' })
  user_password: string;

  @Column({ nullable: false, type: 'boolean' })
  user_status: boolean;
}
