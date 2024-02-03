import { Categories } from "src/category/categories.entity";

export class UpdateNoteDTO{
    id: string;
    post: string;
    active: boolean;
    category: Categories;
    category_id: string;
}
