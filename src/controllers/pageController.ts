import { Request, Response} from 'express';

import { createMenuObject } from '../helpers/CreateMenuObject';


export const fantasy = (req: Request, res:Response)=>{
    res.render('pages/page', {
        menu: createMenuObject('fantasy'),
        banner: {
            tile: 'Fantasy',
            background: 'fantasy.jpg'
        }
    });

}

export const fiction = (req: Request, res:Response)=>{
    res.render('pages/page', {
        menu: createMenuObject('fiction'),
        banner: {
            tile: 'Fiction',
            background: 'fiction.jpg'
        }
    });

}

export const literature = (req: Request, res:Response)=>{
    res.render('pages/page', {
        menu: createMenuObject('literature'),
        banner: {
            tile: 'Literature',
            background: 'literature.jpg'
        }
    });

}

export const home = (req: Request, res:Response)=>{
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            tile: 'Todos os livros',
            background: 'allbooks.jpg'
        }
    });


}