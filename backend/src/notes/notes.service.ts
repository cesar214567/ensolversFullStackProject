import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notes } from './notes.entity';
import { CreateNoteDTO } from './dtos/create-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private readonly notesRepository: Repository<Notes>,
  ) {}

  async createNote(note:CreateNoteDTO): Promise<Notes> {
    const poll = this.notesRepository.create(note);
    return this.notesRepository.save(poll);
  }

  async getAllNotes(active:boolean): Promise<Notes[]> {
    return this.notesRepository.find({where:{active}, relations:{
      category: true
    }});
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