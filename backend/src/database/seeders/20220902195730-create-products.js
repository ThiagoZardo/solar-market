'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        product_name: 'Notebook Gamer Dell G15-i1000-D20P',
        description: '15.6" FHD 10ª Geração Intel Core i5 8GB 512GB SSD NVIDIA GTX 1650 Linux',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41qad-9FZoL._AC_SX184_.jpg',
        category: 1,
        price: 4699,
        quantity: 100,
      },
      {
        product_name: 'Notebook Acer Aspire A315-58-573P',
        description: 'CI5 1135G7, 8GB, 256GB SDD, (Intel Iris X Graphics) Windows11. 15,6” LED FHD PRATA',
        image: 'https://m.media-amazon.com/images/I/51xRC4i1Y4L._AC_UL320_.jpg',
        category: 1,
        price: 3439,
        quantity: 100,
      },
      {
        product_name: 'ACER Notebook Aspire 5 A515-56-32PG',
        description: 'Intel Core I3 11ª geração, 4GB, 256GB SDD, Windows11, Prata',
        image: 'https://m.media-amazon.com/images/I/51E+Wzu+6EL._AC_UL320_.jpg',
        category: 1,
        price: 2924,
        quantity: 100,
      }, 
      {
        product_name: 'ACER Notebook Nitro 5 AN515-44-R4KA',
        description: 'AMD R7 4800H, 8GB, 512GB SDD, (GTX 1650 com 4 GB) Windows11. 15,6” LED FHD IPS',
        image: 'https://m.media-amazon.com/images/I/51CITkXajBL._AC_UL320_.jpg',
        category: 1,
        price: 5498,
        quantity: 100,
      }, 
      {
        product_name: 'Notebook Lenovo Ultrafino IdeaPad 3i i5-10210U',
        description: '8GB 256 GB SSD Windows 11 15.6" 82BS000GBR Prata',
        image: 'https://m.media-amazon.com/images/I/419v-pgEtXL._AC_UL320_.jpg',
        category: 1,
        price: 3449,
        quantity: 100,
      }, 
      {
        product_name: 'ACER Notebook Gamer Nitro 5 AN515-55-59T4',
        description: 'Intel Core I5 10ª geração, 8GB, 512GB SDD, NVIDIA GTS 1650, Windows, preto, 15.6',
        image: 'https://m.media-amazon.com/images/I/51WqIqjSOxL._AC_UL320_.jpg',
        category: 1,
        price: 4449,
        quantity: 100,
      }, 
      {
        product_name: 'DELL Notebook Inspiron i15-i1100-A10PF',
        description: '15.6" Full HD Intel Pentium Gold 4GB 128GB SSD+1TB na nuvem Windows 11',
        image: 'https://m.media-amazon.com/images/I/61OMkYOtpFL._AC_UL320_.jpg',
        category: 1,
        price: 2789,
        quantity: 100,
      }, 
      {
        product_name: 'Notebook Lenovo Ultrafino IdeaPad 3',
        description: 'Ryzen 5 5500U 8GB 256GB SSD Prata 15.6" Windows 11',
        image: 'https://m.media-amazon.com/images/I/61i8c2d4tML._AC_UL320_.jpg',
        category: 1,
        price: 3067,
        quantity: 100,
      }, 
      {
        product_name: 'Notebook Lenovo IdeaPad 3i',
        description: 'Celeron 4GB 128GB SSD W11 15.6", 82BU0006BR',
        image: 'https://m.media-amazon.com/images/I/51pIlgIyjZL._AC_UL320_.jpg',
        category: 1,
        price: 1999,
        quantity: 100,
      }, 
      {
        product_name: 'Celular Xiaomi Redmi 9A',
        description: 'Versão Global 32gb / 2gb Ram/Tela 6.53"',
        image: 'https://m.media-amazon.com/images/I/51DcSdceNtL._AC_UL320_.jpg',
        category: 2,
        price: 625,
        quantity: 100,
      },
      {
        product_name: 'Celular Xiaomi Redmi 10',
        description: '128GB/4GB - Sea Blue',
        image: 'https://m.media-amazon.com/images/I/41r5kpPHS9L._AC_UL320_.jpg',
        category: 2,
        price: 1145,
        quantity: 100,
      }, 
      {
        product_name: 'Celular Positivo P26',
        description: 'Tela 1,8", Câmera traseira QVGA, 32MB, Bluetooth, Rádio FM - Preto',
        image: 'https://m.media-amazon.com/images/I/51RjGW005tL._AC_UL320_.jpg',
        category: 2,
        price: 74,
        quantity: 100,
      }, 
      {
        product_name: 'Celular Xiaomi Redmi Note 11',
        description: '128gb 4gbRam com NFC - No Brasil',
        image: 'https://m.media-amazon.com/images/I/510K-DoBe7L._AC_UL320_.jpg',
        category: 2,
        price: 1210,
        quantity: 100,
      }, 
      {
        product_name: 'Smartphone Samsung Galaxy A03',
        description: 'Core 32GB - Preto, 4G, Câmera 8MP + Selfie 5MP, Octa-Core, RAM 2GB, Tela 6,5"',
        image: 'https://m.media-amazon.com/images/I/61OO9jwk57L._AC_UL320_.jpg',
        category: 2,
        price: 709,
        quantity: 100,
      }, 
      {
        product_name: 'Smartphone Samsung Galaxy A12',
        description: 'Branco, Tela 6.5", 4G+Wi-Fi, Android 10, Câm Traseira 48+5+2+2MP, Frontal 8MP, 64GB',
        image: 'https://m.media-amazon.com/images/I/61462TXB86S._AC_UL320_.jpg',
        category: 2,
        price: 4099,
        quantity: 100,
      }, 
      {
        product_name: 'Smartphone Samsung Galaxy A13',
        description: '3i i5-10300H 8GB 256GBSSD GTX 1650 4GB 15.6" FHD WVA Linux 82CGS00100, Blue',
        image: 'https://m.media-amazon.com/images/I/51GqHrxFv2S._AC_UL320_.jpg',
        category: 2,
        price: 4099,
        quantity: 100,
      }, 
      {
        product_name: 'Notebook Lenovo ideapad Gaming',
        description: 'Preto 128GB 4GB RAM bateria 5000mAh Câmera Quádrupla Traseira de 50MP + 5MP + 2MP',
        image: 'https://m.media-amazon.com/images/I/61AAFe+qSbL._AC_UL320_.jpg',
        category: 2,
        price: 1399,
        quantity: 100,
      }, 
      {
        product_name: 'Smartphone Samsung Galaxy A03',
        description: 'Core Azul 32GB 2GB RAM Tela Infinita de 6.5" Dual Chip',
        image: 'https://m.media-amazon.com/images/I/71zyhamHJ5L._AC_UL320_.jpg',
        category: 2,
        price: 740,
        quantity: 100,
      }, 
      {
        product_name: 'Smartphone Samsung Galaxy A22',
        description: 'Branco 128GB 6.4 4GB RAM 13MP Dual Chip',
        image: 'https://m.media-amazon.com/images/I/51WnYHLpYaL._AC_UL320_.jpg',
        category: 2,
        price: 1329,
        quantity: 100,
      },
      {
        product_name: 'Smartband - Xiaomi Mi Band 7',
        description: 'Versão Global - Lançamento - Preto',
        image: 'https://m.media-amazon.com/images/I/610ofcQSLfS._AC_UL320_.jpg',
        category: 2,
        price: 268,
        quantity: 100,
      },
      {
        product_name: 'XIAOMI 7592 Smartwatch Amazfit',
        description: 'Bip U Pro, Gps, Preto',
        image: 'https://m.media-amazon.com/images/I/61+4H2l96LL._AC_SX679_.jpg',
        category: 3,
        price: 379,
        quantity: 100,
      },   
      {
        product_name: 'Relógio Smartwatch Amazfit',
        description: 'GTS 2 mini - Black',
        image: 'https://m.media-amazon.com/images/I/61hmDN6921L._AC_SX466_.jpg',
        category: 3,
        price: 440,
        quantity: 100,
      },   
      {
        product_name: 'HAYLOU GST Smartwatch',
        description: '1,69" tela sensível ao toque para homens e mulheres, SpO2, fmonitor de frequência cardíaca, monitor de sono,mostrador de relógio personalizado, IP68 Relógio esportivo, Relógio inteligente para Android iOS',
        image: 'https://m.media-amazon.com/images/I/61MJTasZ9WL._AC_SX466_.jpg',
        category: 3,
        price: 179,
        quantity: 100,
      },   
      {
        product_name: 'HAYLOU RS4 Plus Smartwatch',
        description: '1,78" AMOLED tela sensível ao toque para homens e mulheres, SpO2, monitor de frequência cardíaca, monitor de sono, 100+ Modelos Esportivos, IP68 à prova d água, Relógio inteligente para Android iOS (Preto)',
        image: 'https://m.media-amazon.com/images/I/61xhEpDhFCL._AC_SX466_.jpg',
        category: 3,
        price: 289,
        quantity: 100,
      },   
      {
        product_name: 'XIAOMI 7592 Smartwatch Amazfit',
        description: 'Bip U Pro, Gps, Preto',
        image: 'https://m.media-amazon.com/images/I/61+4H2l96LL._AC_SY300_SX300_.jpg',
        category: 3,
        price: 379,
        quantity: 100,
      },   
      {
        product_name: 'Smartband - Xiaomi Mi Band 7',
        description: 'Versão Global - Lançamento - Preto',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41qX3yqRfjL.__AC_SX300_SY300_QL70_ML2_.jpg',
        category: 3,
        price: 268,
        quantity: 100,
      },   
      {
        product_name: 'Relógio Smartwatch Amazfit',
        description: 'GTS 2 mini - Black',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61hmDN6921L.__AC_SX300_SY300_QL70_ML2_.jpg',
        category: 3,
        price: 440,
        quantity: 100,
      },   
      {
        product_name: 'Relógio Garmin Forerunner 55',
        description: 'com Monitor Cardíaco de Pulso e Gps',
        image: 'https://m.media-amazon.com/images/I/61xnpZ6iOrS._AC_SX466_.jpg',
        category: 3,
        price: 1250,
        quantity: 100,
      },   
      {
        product_name: 'Smartwatch Amazfit',
        description: 'Bip U Pro - Preto',
        image: 'https://m.media-amazon.com/images/I/71ZzBVJPiRL._AC_SX466_.jpg',
        category: 3,
        price: 379,
        quantity: 100,
      },   
      {
        product_name: 'Monitor Cardíaco de Pulso com GPS Garmin Forerunner 245',
        description: 'Music Preto e Vermelho EU',
        image: 'https://m.media-amazon.com/images/I/61TKfYZN8pL._AC_SX466_.jpg',
        category: 3,
        price: 1889,
        quantity: 100,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('products', null, {});
  }
};