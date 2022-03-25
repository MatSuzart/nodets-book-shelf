import { Router } from 'express';
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';


const router = Router();


router.get('/', pageController.home);
router.get('/fantasy', pageController.fantasy);
router.get('/fiction', pageController.fiction);
router.get('/literature', pageController.literature);

router.get('/search', searchController.search);

//router.get('/', (req, res)=>{
//    res.send('home');
//});


export default router;
