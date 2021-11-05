import { Controller, Post} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Game } from './game.entity';
import { GameService } from './game.service';


@Crud({
    model: {
        type: Game,
    },
    routes: {
       // exclude: ['getOneBase'],
    },
})

@Controller('game')
export class GameController implements CrudController<Game> {
    constructor(public service: GameService) {
    }

  @Post('/deleteDate')
  async getHello() {
    return await this.service.removeDate();
  }
}
