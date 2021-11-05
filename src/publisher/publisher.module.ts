import { Module } from '@nestjs/common';
import {Publisher} from './publisher.entity';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  controllers: [PublisherController],
  providers: [PublisherService]
})
export class PublisherModule {}
