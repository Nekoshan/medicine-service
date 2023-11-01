'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medicines', [
      {name: 'Nurofen', amount: 1, price: '234', discount: 'true', img:"https://yk24.ru/obshhestvo/eksperiment-po-distanczionnoj-prodazhe-reczepturnyh-lekarstv-nachnut-v-rossii-s-1-marta/", createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Teraflu', amount: 1, price: '432', discount: 'false', img:"https://yk24.ru/obshhestvo/eksperiment-po-distanczionnoj-prodazhe-reczepturnyh-lekarstv-nachnut-v-rossii-s-1-marta/", createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Paracetamol', amount: 1, price: '543', discount: 'true', img:"https://yk24.ru/obshhestvo/eksperiment-po-distanczionnoj-prodazhe-reczepturnyh-lekarstv-nachnut-v-rossii-s-1-marta/", createdAt: new Date(), updatedAt: new Date(),},
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
