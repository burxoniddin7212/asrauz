import { Module } from '@nestjs/common';

import { AppCommonModule } from './common.module.app';

@Module({
  imports: [AppCommonModule],
})
export class AppModule {}
