import { ApiProperty } from '@nestjs/swagger';
import { Game } from '../game/game.entity';
import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
@Entity()
export class Publisher{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    name:string;

    @ApiProperty()
    @Column()
    siret: number;
    
    @ApiProperty()
    @Column()
    phone: string;

    @OneToMany(
        _type => Game,
        game => game.publisherId
    )
    games: Game[];
}



