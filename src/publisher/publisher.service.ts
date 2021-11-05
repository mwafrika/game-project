import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Publisher } from './publisher.entity';

@Injectable()
export class PublisherService extends TypeOrmCrudService<Publisher> {
    constructor(@InjectRepository(Publisher) repo) {
        super(repo);
    }
}
