import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IConfig } from './types'

@Injectable()
export class CustomConfigService {
  constructor(private readonly configService: ConfigService) { }

  get env(): IConfig {
    return (
      this.configService.get<IConfig>('APP') ?? {
        PORT: 3000,
        DATABASE_URL: '',
        JWT_SECRET: '',
        MAIL_HOST: '',
        MAIL_PORT: 587,
        MAIL_USER: '',
        MAIL_PASS: '',
        SQLSERVER_SERVER: '',
        SQLSERVER_DATABASE: '',
        SQLSERVER_USER: '',
        SQLSERVER_PASSWORD: '',
        SQLSERVER_PORT: 1433,
      }
    )
  }
}
