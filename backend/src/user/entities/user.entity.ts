import { Profile } from './profile.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ nullable: false, type: 'int' })
  profile_id: number;

  @ManyToOne(() => Profile, (profile) => profile.users)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;
}
