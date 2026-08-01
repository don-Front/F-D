import badgeClock from '@/assets/images/hero/badge-clock.png';
import badgeCourier from '@/assets/images/hero/badge-courier.png';
import badgeFood from '@/assets/images/hero/badge-food.png';
import badgeUser from '@/assets/images/hero/badge-user.png';
import heroWoman from '@/assets/images/hero/hero-woman.png';
import review1 from '@/assets/images/hero/review-avatar-1.png';
import review2 from '@/assets/images/hero/review-avatar-2.png';
import review3 from '@/assets/images/hero/review-avatar-3.png';

export const HERO = {
  titleLines: ["Don't wanna", 'Make you have', 'A bad day'],
  description:
    'We deliver your favorite meals fast — with free delivery and an easy ordering experience.',
  primaryCta: 'Order Now',
  secondaryCta: 'How to order',
  reviewLabel: 'Customer Review',
  rating: '4.8',
  reviewsCount: '5k+ reviews',
  reviewAvatars: [review1, review2, review3],
  visual: {
    woman: heroWoman,
    courierBadge: badgeCourier,
    clockBadge: badgeClock,
    foodBadge: badgeFood,
    userBadge: badgeUser,
    quote:
      'Too tired to cook? Just tap once and a hot meal will be on its way.',
    reviewsCount: '160K+',
  },
};
