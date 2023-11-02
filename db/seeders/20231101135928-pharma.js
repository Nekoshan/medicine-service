'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medicines', [
      {name: 'Nurofen', amount: 1, price: '234', discount: 'true', img:"https://www.eapteka.ru/upload/offer_photo/207/893/1_685e20028ee05540cfc78256bb004311.png?t=1634118048", createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Teraflu', amount: 1, price: '432', discount: 'false', img:"https://www.eapteka.ru/upload/offer_photo/207/893/1_685e20028ee05540cfc78256bb004311.png?t=1634118048", createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Paracetamol', amount: 1, price: '543', discount: 'true', img:"https://www.eapteka.ru/upload/offer_photo/207/893/1_685e20028ee05540cfc78256bb004311.png?t=1634118048", createdAt: new Date(), updatedAt: new Date(),},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
