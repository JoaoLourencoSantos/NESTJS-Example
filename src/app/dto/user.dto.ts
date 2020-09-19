import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UserDTO {
  id: number;

  @IsNotEmpty({
    message: 'Name must not be null',
  })
  name: string;

  @IsNotEmpty({
    message: 'Email must not be null',
  })
  @IsEmail(
    {},
    {
      message: 'Email must be valid',
    },
  )
  @MaxLength(200, {
    message: 'Email not must be longer than 200 characters',
  })
  email: string;

  @IsNotEmpty({
    message: 'Password must not be null',
  })
  @MinLength(6, {
    message: 'Password must be longer than 6 characters',
  })
  password: string;

  dateBirth: Date;
  createdAt: Date;
}
