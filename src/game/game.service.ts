
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThan } from 'typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Game } from './game.entity';
import * as moment from "moment"

@Injectable()
export class GameService extends TypeOrmCrudService<Game> {
    constructor(@InjectRepository(Game) repo) {
        super(repo);
    }

    async removeDate() {
        const before18Months = moment().subtract(18, 'months').toDate();

        const res1 = await this.repo.delete({
            releaseDate: LessThan(before18Months)
        })

        const before12Months = moment().subtract(2, 'months').toDate();

        const updated  = await this.repo.update({
            releaseDate: LessThan(before12Months)
        }, {
            price: ()=> "price - price * 0.2"
        })

        return {updated, res1}
    }

}
