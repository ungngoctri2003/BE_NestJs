import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubscriberDto {
  @IsNotEmpty({ message: 'Name không được để trống!!' })
  name: string;

  @IsNotEmpty({ message: 'Name không được để trống!!' })
  @IsEmail({}, { message: 'Email khoong đúng định dạng' })
  email: string;

  @IsNotEmpty({ message: 'Name không được để trống!!' })
  @IsArray({ message: 'Skills có định dạng là array' })
  skills: string[];
}
