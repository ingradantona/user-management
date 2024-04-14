import { AxiosError } from 'axios';

export interface CustomAxiosError
  extends AxiosError<{
    error: string;
    message: string;
    statusCode: number;
  }> {}
