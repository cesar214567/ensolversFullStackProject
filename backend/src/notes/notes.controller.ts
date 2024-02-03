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
    const {active,categoryId,...rest} = queryParams;
    console.log(categoryId)
    const category = categoryId? {id:categoryId}: null
    return response.status(HttpStatus.OK).send(await this.notesService.getAllNotes(active,category));
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
    console.log(id);
    const deleted = await this.notesService.deleteNoteById(id);
    response
      .status(deleted ? HttpStatus.OK : HttpStatus.NOT_FOUND)
      .send()
  }

  @Put("/:id")
  async updateNote(@Res() response,@Body() note:UpdateNoteDTO,@Param('id')noteId:string){
    try{
      console.log(noteId);
      console.log(note);
      const {category_id, ...rest} = note;
      const categoryObject = await this.categoriesService.findCategoryById(category_id);
      const noteToUpdate = {...rest, category:categoryObject}
      noteToUpdate.id = noteId;
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
