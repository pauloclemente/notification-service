import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { NotificationController } from './controllers/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class HttpModule {}
