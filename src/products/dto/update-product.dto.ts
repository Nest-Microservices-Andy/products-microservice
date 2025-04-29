import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsPositive } from 'class-validator';
import { LargeNumberLike } from 'crypto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNumber()
  @IsPositive()
  id: number;
}
