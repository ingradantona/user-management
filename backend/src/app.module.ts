import { Module } from '@nestjs/common';
import { SwaggerModule } from './config/swagger/swagger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/database/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), SwaggerModule],
  providers: [],
})
export class AppModule {}
