import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('MYSQL_HOST', 'localhost'),
        port: parseInt(configService.get<string>('MYSQL_PORT', '3306'), 10),
        database: configService.get<string>('MYSQL_DATABASE', 'test'),
        username: configService.get<string>('MYSQL_USERNAME', 'root'),
        password: configService.get<string>('MYSQL_PASSWORD', 'password'),
        autoLoadEntities: true,
        synchronize: configService.get<boolean>('MYSQL_SYNCHRONIZE', true),
      }),
    }),
  ],
})
export class DatabaseModule {}
