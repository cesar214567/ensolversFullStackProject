import { Categories } from 'src/category/categories.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Notes {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    post: string;

    @Column({ nullable: true })
    active: boolean;

    @ManyToOne(type => Categories)
    @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
    category: Categories;

}