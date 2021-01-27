'use strict';
const bcrypt = require('bcryptjs')
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: bcrypt.hashSync(SEED_USER.password, bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    const userId = await queryInterface.sequelize.query(`SELECT id from USERS;`)
    console.log(userId)
    const userIdRows = userId[0]
    await queryInterface.bulkInsert('Todos',
      Array.from({ length: 10 }).map((_, i) =>
      ({
        name: `name-${i}`,
        UserId: userIdRows[0].id,
        isDone: true,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      ), {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {})
    await queryInterface.bulkDelete('Users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
