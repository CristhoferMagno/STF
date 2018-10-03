import Index from './components/default/Index';
import Recipe from './components/default/Recipe';
import Recipe2 from './components/default/Recipe2';
import Recipe3 from './components/default/Recipe3';
import Tips from './components/default/Tips';
import Tips2 from './components/default/Tips2';
import Tips3 from './components/default/Tips3';

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/receitas',
    name: 'recipes',
    component: Recipe
  },
  {
    path: '/receitas2',
    name: 'recipes2',
    component: Recipe2
  },
  {
    path: '/receitas3',
    name: 'recipes3',
    component: Recipe3
  },
  {
    path: '/dicas',
    name: 'tips',
    component: Tips
  },
  {
    path: '/dicas2',
    name: 'tips2',
    component: Tips2
  },
  {
    path: '/dicas3',
    name: 'tips3',
    component: Tips3
  },
  {
    path: '*',
    component: Index
  },
  

];