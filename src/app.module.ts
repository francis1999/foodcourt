import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { MealModule } from './meal/meal.module';


@Module({
  imports: [AuthModule, CategoryModule, BrandModule, MealModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
