import foodBurger from '@/assets/images/menu/food-burger.png';
import foodMeatballs from '@/assets/images/menu/food-meatballs.png';
import foodPancake from '@/assets/images/menu/food-pancake.png';
import foodPizza from '@/assets/images/menu/food-special-pizza.png';
import foodStrawberry from '@/assets/images/menu/food-strawberry.png';

export const TRENDING_FOOD = [
  {
    id: 'strawberry',
    name: 'Strawberry Cake',
    price: '$5',
    rating: 4.5,
    image: foodStrawberry,
  },
  {
    id: 'pancake',
    name: 'Pancake',
    price: '$7',
    rating: 4.6,
    image: foodPancake,
  },
  {
    id: 'special-pizza',
    name: 'Special Pizza',
    price: '$20',
    rating: 4.8,
    image: foodPizza,
    featured: true,
  },
  {
    id: 'meatballs',
    name: 'Meatballs',
    price: '$15',
    rating: 4.5,
    image: foodMeatballs,
  },
  {
    id: 'burger',
    name: 'Burger',
    price: '$10',
    rating: 4.7,
    image: foodBurger,
  },
];
