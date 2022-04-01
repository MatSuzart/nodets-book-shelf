import { Request, Response} from 'express';

import { Book } from '../models/book';
import { createMenuObject } from '../helpers/CreateMenuObject';

export const search = (req: Request, res:Response)=>{

let query: string = req.query.q as string;
let list = Book.getFromName(query);

if(!query){
    res.redirect('/');
    return;
}

res.render('pages/page',{
    menu: createMenuObject(''),
    Book,
    query
});

}