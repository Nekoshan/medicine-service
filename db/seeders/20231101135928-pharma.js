'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medicines', [
      {name: 'Nurofen', amount: 1, price: '234', discount: 'true', img:"https://www.eapteka.ru/upload/offer_photo/250/625/1_243738188aa763a7b5e0ec17ba91ffaa.png?t=1678785879", createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Teraflu', amount: 1, price: '432', discount: 'false', img:"https://www.eapteka.ru/upload/offer_photo/250/625/1_243738188aa763a7b5e0ec17ba91ffaa.png?t=1678785879", createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Paracetamol', amount: 1, price: '543', discount: 'true', img:"https://www.eapteka.ru/upload/offer_photo/250/625/1_243738188aa763a7b5e0ec17ba91ffaa.png?t=1678785879", createdAt: new Date(), updatedAt: new Date(),},
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
