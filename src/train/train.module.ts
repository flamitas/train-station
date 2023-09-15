import { Module } from '@nestjs/common';
import { TrainController } from './train.controller';
import { TrainService } from './train.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainSchema } from './schema/train.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Train', schema: TrainSchema}])],
  controllers: [TrainController],
  providers: [TrainService]
})
export class TrainModule {}
