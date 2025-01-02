import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ApiStatusEnum } from '../enums/api-status.enum';
import { ApiStatusMessages } from '../constants/api-status-messages.constant';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : ApiStatusEnum.INTERNAL_SERVER_ERROR;

    const message = ApiStatusMessages[ApiStatusEnum.INTERNAL_SERVER_ERROR];
    const errors =
      exception instanceof HttpException
        ? exception.getResponse()
        : { error: 'Unexpected error occurred' };

    const request_id = uuidv4();

    response.status(status).json({
      status: false,
      message,
      errors,
      meta: { request_id },
    });
  }
}
