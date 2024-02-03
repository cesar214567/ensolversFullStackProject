import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDTO } from './dtos/create-categories.dto';

@Controller("/categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories(@Res() response){
    return response.status(HttpStatus.OK).send(await this.categoriesService.getAllCategories());
  }

  @Get("/:id")
  async getCategoriesById(@Res() response,@Param('id')id:string){
    const categorys = await this.categoriesService.findCategoryById(id);
    return response
      .status(categorys ? HttpStatus.OK : HttpStatus.NOT_FOUND)
      .send(categorys);
  }
  
  @Post()
  async createCategory(@Res() response,@Body() category:CreateCategoriesDTO){
    try{
      return response
      .status(HttpStatus.OK)
      .send(await this.categoriesService.createCategory({...category}));
    }catch(e){
      console.log(e)
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send({"message":"An error ocurred when saving the category"})
    }
  }
  
  @Delete("/:id")
  async deleteCategory(@Res() response, @Param('id')id:string){
    const deleted = await this.categoriesService.deleteCategoryById(id);
    response
      .status(deleted ? HttpStatus.OK : HttpStatus.NOT_FOUND)
      .send({})
  }
}
