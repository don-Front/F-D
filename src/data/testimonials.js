import avatarBella from '@/assets/images/comments/avatar-bella.png';
import avatarSmith from '@/assets/images/comments/avatar-smith.png';
import heroWoman from '@/assets/images/hero/hero-woman.png';
import review1 from '@/assets/images/hero/review-avatar-1.png';
import review2 from '@/assets/images/hero/review-avatar-2.png';
import review3 from '@/assets/images/hero/review-avatar-3.png';
import avatarErick from '@/assets/images/testimonials/avatar-erick.png';
import womanPizza from '@/assets/images/testimonials/woman-pizza.png';

export const COMMENT_CARD_ASSETS = [
  { id: 'smith', avatar: avatarSmith },
  { id: 'bella', avatar: avatarBella },
];

export const FEATURED_TESTIMONIAL_ASSETS = [
  { id: 'erick', rating: 5, avatar: avatarErick, image: womanPizza },
  { id: 'maya', rating: 4.9, avatar: avatarBella, image: heroWoman },
  { id: 'daniel', rating: 5, avatar: review1, image: womanPizza },
  { id: 'sofia', rating: 4.8, avatar: review2, image: heroWoman },
  { id: 'liam', rating: 4.9, avatar: avatarSmith, image: womanPizza },
  { id: 'nina', rating: 5, avatar: review3, image: heroWoman },
  { id: 'owen', rating: 4.9, avatar: avatarErick, image: womanPizza },
];
