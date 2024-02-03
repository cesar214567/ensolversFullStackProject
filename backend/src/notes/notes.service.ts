import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notes } from './notes.entity';
import { CreateNoteDTO } from './dtos/create-note.dto';
import { UpdateNoteDTO } from './dtos/update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private readonly notesRepository: Repository<Notes>,
  ) {}

  async createNote(note:CreateNoteDTO): Promise<Notes> {
    const noteToCreate = this.notesRepository.create(note);
    return this.notesRepository.save(noteToCreate);
  }

  async updateNote(note:UpdateNoteDTO): Promise<Boolean> {
    const {id, ...rest} = note;
    const updateResponse =  await this.notesRepository.update(note.id,rest);
    return updateResponse.affected === 1 
  }

  async getAllNotes(active:boolean,category:any): Promise<Notes[]> {
    return this.notesRepository.find({where: {active,category},relations:{category:true}})
    
      
  }

  async findNoteById(id:string): Promise<Notes> {
    return this.notesRepository.findOne({where:{id},relations:{category:true}});
  }

  async deleteNoteById(id:string): Promise<Boolean> {
    const deletedResponse = await this.notesRepository.delete({id});
    console.log(deletedResponse);
    return deletedResponse.affected===1;
  }
}