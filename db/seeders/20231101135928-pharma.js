/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Medicines',
      [
        {
          name: 'Nurofen',
          amount: 1,
          price: '234',
          discount: 'true',
          img: 'https://www.eapteka.ru/upload/offer_photo/207/893/1_685e20028ee05540cfc78256bb004311.png?t=1634118048',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Teraflu',
          amount: 50,
          price: '432',
          discount: 'false',
          img: 'https://vseapteki.ru/cropping/thumbnails/101/60447/share_default/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Paracetamol',
          amount: 20,
          price: '543',
          discount: 'true',
          img: 'https://f.stolichki.ru/s/drugs/large/10/10189.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
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
