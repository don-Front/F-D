import serviceDelivery from '@/assets/images/services/service-delivery.png';
import serviceEasyOrder from '@/assets/images/services/service-easy-order.png';
import serviceFastest from '@/assets/images/services/service-fastest.png';

export const SERVICES = [
  {
    id: 'delivery',
    title: 'Delivery Food',
    description:
      'Hot meals from nearby kitchens, carefully packed so everything arrives fresh.',
    image: serviceDelivery,
  },
  {
    id: 'easy-order',
    title: 'Easy to order',
    description:
      'Browse the menu, customize your dish, and checkout in a few taps.',
    image: serviceEasyOrder,
  },
  {
    id: 'fastest',
    title: 'Fastest Delivery',
    description:
      'Live tracking and priority routes keep your order on time, every time.',
    image: serviceFastest,
  },
];
