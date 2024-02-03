import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Admins {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    email: string;

    @Column({ nullable: true })
    password: string;
}