import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDTO } from './dtos/create-note.dto';
import { UpdateNoteDTO } from './dtos/update-note.dto';
import { CategoriesService } from 'src/category/categories.service';

@Controller("/notes")
export class NotesController {
  constructor(private readonly notesService: NotesService,
              private readonly categoriesService: CategoriesService) {}

  @Get()
  async getNotes(@Res() response, @Query() queryParams){
    const {active,...rest} = queryParams;
    return response.status(HttpStatus.OK).send(await this.notesService.getAllNotes(active));
  }

  @Get("/:id")
  async getNotesById(@Res() response,@Param('id')id:string){
    const notes = await this.notesService.findNoteById(id);
    return response
      .status(notes ? HttpStatus.OK : HttpStatus.NOT_FOUND)
      .send(notes);
  }
  
  @Post()
  async createNote(@Res() response,@Body() note:CreateNoteDTO){
    try{
      return response
      .status(HttpStatus.OK)
      .send(await this.notesService.createNote(note));
    }catch(e){
      console.log(e)
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send({"message":"An error ocurred when saving the note"})
    }
  }
  
  @Delete("/:id")
  async deleteNote(@Res() response, @Param('id')id:string){
    const deleted = await this.notesService.deleteNoteById(id);
    response
      .status(deleted ? HttpStatus.OK : HttpStatus.NOT_FOUND)
      .send()
  }

  @Put()
  async updateNote(@Res() response,@Body() note:UpdateNoteDTO){
    try{
      const {category, ...rest} = note;
      const categoryObject = await this.categoriesService.findCategoryById(category);
      const noteToUpdate = {...rest, category:categoryObject}
      const {id, ...updatedNote} = await this.notesService.createNote(noteToUpdate); 
      return response
      .status(HttpStatus.OK)
      .send(updatedNote);
    }catch(e){
      console.log(e)
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send({"message":"An error ocurred when updating the note"})
    }
  }
}
