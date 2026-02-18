import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-sports-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sports-products.component.html',
  styleUrls: ['./sports-products.component.css']
})
export class SportsProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Football Adidas Tiro Pro',
      description: 'Профессиональный футбольный мяч размера 5. Выполнен из высококачественной синтетической кожи с термосклеенными швами для идеальной траектории полета.',
      price: 35990,
      rating: 4.8,
      image: 'images/football.jpeg',
      images: [
      'images/football.jpeg'
    ],
      link: 'football.jpeg'
    },
    {
      id: 2,
      name: 'Кроссовки беговые Nike Air Zoom Pegasus 40',
      description: 'Мужские беговые кроссовки с технологией Air Zoom. Обеспечивают превосходную амортизацию и возврат энергии на каждом шагу.',
      price: 86000,
      rating: 4.7,
      image: 'images/krossovki.jpg',
      images: [
        'images/krossovki.jpg',
        'images/krossovki1.jpg',
        'images/krossovki2.jpg'
      ],
      link: 'krossovki.jpg'
    },
    {
      id: 3,
      name: 'Теннисная ракетка Wilson Blade 98',
      description: 'Профессиональная теннисная ракетка для продвинутых игроков. Вес 305г, баланс 33 см, струнная формула 16x19.',
      price: 119900,
      rating: 4.9,
      image: 'images/raketka.jpg',
      images: [
        'images/krossovki.jpg',
        'images/krossovki.jpg',
        'images/krossovki.jpg'
      ],
      link: 'raketka.jpg'
    },
    {
      id: 4,
      name: 'Гантели разборные Starfit 20 кг',
      description: 'Комплект разборных гантелей с блинами по 2.5 кг, 5 кг. Хромированный гриф, удобные замки. Идеально для домашних тренировок.',
      price: 30490,
      rating: 4.6,
      image: 'images/gantelu.jpg',
      images: [
        'images/gantelu.jpg',
        'images/gantelu.jpg',
        'images/gantelu.jpg'
      ],
      link: 'gantelu.jpg'
    },
    {
      id: 5,
      name: 'Велосипед горный Stinger Element 26',
      description: 'Горный велосипед с алюминиевой рамой, 21 скорость, передняя амортизация. Диаметр колес 26 дюймов, дисковые тормоза.',
      price: 156000,
      rating: 4.5,
      image: 'images/velosiped.jpg',
      images: [
        'images/velosiped.jpg',
        'images/velosiped.jpg',
        'images/velosiped.jpg'
      ],
      link: 'velosiped.jpg'
    },
    {
      id: 6,
      name: 'Мяч Wilson Мяч баскетбольный Wilson NBA Team Alliance Bro Nets',
      description: 'Официальный мяч НБА размера 7. Изготовлен из высококачественной кожи, обеспечивает отличное сцепление и контроль.',
      price: 29990,
      rating: 4.8,
      image: 'images/nbaball.jpeg',
      images: [
        'images/nbaball.jpeg',
        'images/nbaball.jpeg',
        'images/nbaball.jpeg'
      ],
      link: 'nbaball.jpeg'
    },
    {
      id: 7,
      name: 'Рюкзак K2 196222104760 мультиспортивный 35 бежевый',
      description: 'Рюкзак K2 Float E2 35L — это современная лавинная система с электрокомпрессором Alpride E2, разработанная для безопасных путешествий вне трасс.',
      price: 1099900,
      rating: 4.7,
      image: 'images/rykzak.jpg',
      images: [
        'images/rykzak.jpg',
        'images/rykzak.jpg',
        'images/rykzak.jpg'
      ],
      link: 'rykzak.jpg'
    },
    {
      id: 8,
      name: 'Самокат Трюковой Triad C120 Condemned Grey/Purple',
      description: 'Профессиональный трюковой самокат из алюминиевого сплава. Колеса 110 мм, подшипники ABEC 9, выдерживает нагрузку до 100 кг.',
      price: 96000,
      rating: 4.6,
      image: 'images/samokat.jpg',
      images: [
        'images/samokat.jpg',
        'images/samokat.jpg',
        'images/samokat.jpg'
      ],
      link: 'samokat.jpg'
    },
    {
      id: 9,
      name: 'Массажное кресло Sport&Fitness SFBRMC19 до 150 кг 20 программ',
      description: 'Представляем вам массажное кресло, которое обеспечит полное расслабление и комфорт! Это кресло с 20 программами массажа и 6 режимами, которое охватывает все зоны тела — от головы и шеи до ягодиц и стоп. ',
      price: 555000,
      rating: 4.5,
      image: 'images/massagekreslo.jpg',
      images: [
        'images/massagekreslo.jpg',
        'images/massagekreslo.jpg',
        'images/massagekreslo.jpg'
      ],
      link: 'massagekreslo.jpg'
    },
    {
      id: 10,
      name: 'Лыжи беговые Elan Wingman 76 Carbon 168 см черный',
      description: 'Профессиональные беговые лыжи для конькового хода. Технология Cold Base Bonding, сердечник Air Core Carbon, крепления NNN.',
      price: 129990,
      rating: 4.9,
      image: 'images/lizhi.jpeg',
      images: [
        'images/lizhi.jpeg',
        'images/lizhi.jpeg',
        'images/lizhi.jpeg'
      ],
      link: 'lizhi.jpeg'
    }
  ];

  shareViaWhatsApp(product: Product) {
    const text = encodeURIComponent(`Смотрите этот спортивный товар на Kaspi: ${product.name}`);
    const url = encodeURIComponent(product.link);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareViaTelegram(product: Product) {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  getRatingStars(rating: number): boolean[] {
    const stars: boolean[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.round(rating));
    }
    return stars;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('kk-KZ', {
      style: 'currency',
      currency: 'KZT',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }
}