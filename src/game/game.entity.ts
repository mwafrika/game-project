import { ApiProperty } from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Game{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    title:string;
    
    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column()
    publisherId: number;

    @ApiProperty()
    @Column()
    tags: string;

    @ApiProperty()
    @Column()
    releaseDate: Date;

}


