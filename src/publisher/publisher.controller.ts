import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Publisher } from './publisher.entity';
import { PublisherService } from './publisher.service';


@Crud({
    model: {
        type: Publisher,
    },
    routes: {
        exclude: ['replaceOneBase','createOneBase','deleteOneBase','updateOneBase'],
    },
}
)

@Controller('publisher')

export class PublisherController implements CrudController<Publisher> {
    constructor(public service: PublisherService) { }
}
