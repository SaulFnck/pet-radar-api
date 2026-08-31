import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('PENDING_EMAIL')
export class pendingEmail{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    payload!:string;
    @Column()
    isPending!: boolean;
    @Column()
    subject!:string;
    @Column()
    to!: string;
}