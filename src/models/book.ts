type BookType = 'fantasy' | 'fiction' | 'literature';
type Book = {
    type: BookType,
    image: string,
    name: string,
    description: string
};

const data:Book[] = [
   {
       type: 'fantasy',
       image: 'fantasy-book.jpg',
       name:  'Fantasy',
       description: 'dark fantasy'
       
   },
   {    
    type: 'fiction',
    image: 'fiction-book.jpg',
    name:  'Ficction',
    description: 'dystopia'
 
},
    {
    type: 'literature',
    image: 'literature-book.jpg',
    name:  'Literature',
    description: 'classic'
    }
    
];


export const Book = {
    getAll: (): Book[] =>{
        return data;
    },
    getFromType: (type:BookType): Book[]=>{
        return data.filter(item => item.type === type);
    },
    getFromName: (name: string): Book[]=> {
        return data.filter(item => {
            if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                return true;
            }else {
                return false;
            }
        });
    }
};