import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './categories.entity';
import { CreateCategoriesDTO } from './dtos/create-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async createCategory(Categorie:CreateCategoriesDTO): Promise<Categories> {
    const poll = this.categoriesRepository.create(Categorie);
    return this.categoriesRepository.save(poll);
  }

  async getAllCategories(): Promise<Categories[]> {
    return this.categoriesRepository.find({relations: {notes:true}});
  }

  async findCategoryById(id:string): Promise<Categories> {
    return this.categoriesRepository.findOne({where: {id},relations: {notes: true}});
  }

  async deleteCategoryById(id:string): Promise<Boolean> {
    const deletedResponse = await this.categoriesRepository.delete({id});
    console.log(deletedResponse);
    return deletedResponse.affected===1;
  }
}