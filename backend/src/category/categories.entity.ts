import { Notes } from 'src/notes/notes.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Categories {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    name: string;

    @OneToMany(() => Notes, (note) => note.category)
    notes: Notes[];

}