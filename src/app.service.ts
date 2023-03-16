import { Inject, Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}
  async getHello() {
    await this.producerService.produce({
      topic: 'test-topic',
      messages: [{ value: 'Hello KafkaJS user!' }],
    });
    return 'Hello World!';
  }
}
