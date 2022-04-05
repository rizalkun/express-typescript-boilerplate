import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm'

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({
        unique: true
    })
    phone?: string;

    @Column({
        default: 0
    })
    status?: number;
    
    @Column()
    password?: string;

    @Column({
        nullable: true
    })
    verification_token?: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    created_at?: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updated_at?: Date;

}