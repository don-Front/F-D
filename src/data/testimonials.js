import avatarBella from '@/assets/images/comments/avatar-bella.png';
import avatarSmith from '@/assets/images/comments/avatar-smith.png';
import heroWoman from '@/assets/images/hero/hero-woman.png';
import review1 from '@/assets/images/hero/review-avatar-1.png';
import review2 from '@/assets/images/hero/review-avatar-2.png';
import review3 from '@/assets/images/hero/review-avatar-3.png';
import avatarErick from '@/assets/images/testimonials/avatar-erick.png';
import womanPizza from '@/assets/images/testimonials/woman-pizza.png';

export const COMMENT_CARDS = [
  {
    id: 'smith',
    name: 'Smith Teen',
    role: 'Food Vlogger',
    text: 'Tracking is clear, couriers are polite, and my order always arrives hot. F&D became my weekly go-to.',
    avatar: avatarSmith,
  },
  {
    id: 'bella',
    name: 'Bella Wish',
    role: 'Food Blogger',
    text: 'From desserts to dinner, every dish looks exactly like the photos. Ordering takes under a minute.',
    avatar: avatarBella,
  },
];

export const FEATURED_TESTIMONIALS = [
  {
    id: 'erick',
    name: 'Erick Smith',
    role: 'Food Blogger',
    text: 'The service is fast and reliable — dinner was at my door in 25 minutes, still steaming and perfectly packed.',
    rating: 5,
    avatar: avatarErick,
    image: womanPizza,
  },
  {
    id: 'maya',
    name: 'Maya Chen',
    role: 'Product Designer',
    text: 'I love how simple the menu is. Filters, clear prices, and free delivery make late-night orders stress-free.',
    rating: 4.9,
    avatar: avatarBella,
    image: heroWoman,
  },
  {
    id: 'daniel',
    name: 'Daniel Brooks',
    role: 'Busy Parent',
    text: 'Family orders used to be chaos. With F&D we build one cart, schedule delivery, and everyone gets what they want.',
    rating: 5,
    avatar: review1,
    image: womanPizza,
  },
  {
    id: 'sofia',
    name: 'Sofia Alvarez',
    role: 'Student',
    text: 'Student-friendly prices without sacrificing quality. The pizza and pancakes are my weekend favorites.',
    rating: 4.8,
    avatar: review2,
    image: heroWoman,
  },
  {
    id: 'liam',
    name: 'Liam Foster',
    role: 'Office Manager',
    text: 'We use F&D for team lunches. Bulk ordering is easy, and support always helps when someone needs a last-minute change.',
    rating: 4.9,
    avatar: avatarSmith,
    image: womanPizza,
  },
  {
    id: 'nina',
    name: 'Nina Patel',
    role: 'Fitness Coach',
    text: 'Fresh ingredients and on-time delivery matter to me. Meals arrive neatly packed and ready to enjoy after training.',
    rating: 5,
    avatar: review3,
    image: heroWoman,
  },
  {
    id: 'owen',
    name: 'Owen Park',
    role: 'Chef & Critic',
    text: 'Portion sizes are honest, sauces stay sealed, and flavors hold up after delivery — rare for food apps.',
    rating: 4.9,
    avatar: avatarErick,
    image: womanPizza,
  },
];
