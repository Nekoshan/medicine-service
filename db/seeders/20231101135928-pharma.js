/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Medicines',
      [
        {
          name: 'Нурофен',
          amount: 38,
          price: '234.94',
          discount: 'true',
          img: 'https://www.eapteka.ru/upload/offer_photo/207/893/1_685e20028ee05540cfc78256bb004311.png?t=1634118048',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Терафлю',
          amount: '54',
          price: '258.84',
          discount: 'false',
          img: 'https://vseapteki.ru/cropping/thumbnails/101/60447/share_default/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Парацетамол',
          amount: '34 шт',
          price: '234.42',
          discount: 'true',
          img: 'https://f.stolichki.ru/s/drugs/large/10/10189.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ринонорм',
          amount: '45 шт',
          price: '135.47',
          discount: 'true',
          img: 'https://f.stolichki.ru/s/drugs/large/10/10189.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    
    // await queryInterface.bulkInsert(
    //   'Users',
    //   [
    //     { name: 'Admin', hashpass:'123', email: 'admin@admin', admin: true, createdAt: new Date(), updatedAt: new Date() },
    //   ],
    //   {},
    // );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
