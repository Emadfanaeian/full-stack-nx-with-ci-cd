import { ArticlesController, ArticlesModule } from '@mangaapp/articles';
import { CategoryController, CategoryModule } from '@mangaapp/category';
import { PrismaModule } from '@mangaapp/prisma';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ArticlesModule, CategoryModule],
  controllers: [AppController, ArticlesController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
