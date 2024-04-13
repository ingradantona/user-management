import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  profile_id: number;

  @Column({ nullable: false, type: 'varchar' })
  profile_name: string;

  @OneToMany(() => User, (user) => user.profile)
  users: User[];
}
