import { Module } from '@nestjs/common';
import { SwaggerModule } from './config/swagger/swagger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/database/typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), SwaggerModule, UserModule],
  providers: [],
})
export class AppModule {}
