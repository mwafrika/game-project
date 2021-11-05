import { Module } from '@nestjs/common';
import { PublisherModule } from './publisher/publisher.module';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
    PublisherModule,
    GameModule,
  ],
})
export class AppModule {}
