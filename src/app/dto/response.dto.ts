export class ResponseDTO {
  statusCode: number;
  sucess: boolean;
  message: string;
  error: string;
  body: any;

  constructor(message: string, body = null, statusCode = 200, sucess = false) {
    this.message = message;
    this.statusCode = statusCode;
    this.sucess = sucess;
    this.body = body;
  }
}
