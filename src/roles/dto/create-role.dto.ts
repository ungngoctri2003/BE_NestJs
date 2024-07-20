import { IsArray, IsBoolean, IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Name không được để trống!' })
  name: string;

  @IsNotEmpty({ message: 'Description: không được để trống!' })
  description: string;

  @IsNotEmpty({ message: 'IsActive: không được để trống!' })
  @IsBoolean({ message: 'IsActive có giá trị boolean' })
  isActive: boolean;

  @IsNotEmpty({ message: 'permissions: không được để trống!' })
  @IsMongoId({ each: true, message: 'Each permissions là mongo object id!' })
  @IsArray({ message: 'permissions có định dạng là array!' })
  permissions: mongoose.Schema.Types.ObjectId[];
}
